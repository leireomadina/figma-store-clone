import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import os from 'os'

// Create the folder where images will be stored
const createImageFolder = () => {
	const folderName = 'images'
	if (!fs.existsSync(folderName)) fs.mkdirSync(folderName)
}

createImageFolder()

;(async () => {
	// Determine the operating system and set the executable path accordingly
	const isMac = os.platform() === 'darwin'
	const isLinux = os.platform() === 'linux'

	// Set the correct executablePath based on the OS
	let executablePath = ''
	if (isMac) {
		executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
	} else if (isLinux) {
		executablePath = '/usr/bin/google-chrome'
	}

	// Launch Puppeteer with the appropriate settings for each OS
	const browser = await puppeteer.launch({
		headless: false, // Set to true to run in headless mode
		executablePath: executablePath,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	})

	const page = await browser.newPage()
	await page.goto('https://store-eu.figma.com/')

	// Wait for the country selector and choose the EU store
	await page.waitForSelector('#country-select')
	await page.select('select#country-select', 'store-eu')
	await page.click('button.submit')

	// Wait for product blocks to appear
	await page.waitForSelector('.product-block', { timeout: 10000 })

	// Scrape product data
	const products = await page.evaluate(() => {
		const productCards = document.querySelectorAll('.product-block')
		const productCardsArr = []

		for (let productCard of productCards) {
			const product = {}
			product.name = productCard.querySelector('.title').innerText
			const priceText = productCard.querySelector('.price').innerText
			product.price = parseFloat(priceText.replace('$', ''))
			product.isNew = !!productCard.querySelector('.new')
			product.image = productCard.querySelector('img.image').getAttribute('src')
			productCardsArr.push(product)
		}

		return productCardsArr
	})

	// Download product images
	for (const product of products) {
		const imageUrl = product.image
		const imageName = `${product.name.replace(/\s/g, '_')}.png`
		const imagePath = path.join('images', imageName)

		try {
			const response = await fetch(imageUrl)
			const buffer = await response.buffer()
			fs.writeFileSync(imagePath, buffer)
			product.imagePath = imagePath
		} catch (error) {
			console.error(`❌ Failed to download image for ${product.name}:`, error)
		}
	}

	console.log('✅ Products:', products)

	await browser.close()
})()