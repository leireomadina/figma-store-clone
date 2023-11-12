import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({
		headless: false,
		executablePath: "/usr/bin/google-chrome",
		env: {
		 	DISPLAY: ":0.0"
		},
		ignoreDefaultArgs: ['--disable-extensions'],
	})
  const page = await browser.newPage()
  await page.goto('https://store-eu.figma.com/')
	await page.waitForSelector('#country-select')
	await page.select('select#country-select', 'store-eu')
	await page.click('button.submit')

	await page.waitForNavigation()
	await page.waitForSelector('.product-block')

	const products = await page.evaluate(() => {
		const productCards = document.querySelectorAll('.product-block')
		const productCardsArr = []
		
		for (let productCard of productCards) {
			const product = {}
			product.name = productCard.querySelector('.title').innerText
			let priceText = productCard.querySelector('.price').innerText
    	product.price = parseFloat(priceText.replace('$', ''))
			product.isNew = productCard.querySelector('.new') ? true : false
			product.image = productCard.querySelector('img.image').getAttribute('src')
			productCardsArr.push(product)
		}
		
		return productCardsArr
	})

	console.log('products ', products)

  await browser.close()
})();