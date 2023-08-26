import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ShopCard from '../../components/ShopCard.vue'

describe('Given the hasFigcaption prop is false', () => {
	const wrapper = shallowMount(ShopCard, {
		props: {
			hasFigcaption: false,
		},
	})

	it('should not render the figcaption element', () => {
		const figcaptionEl = wrapper.find('figcaption')
		expect(figcaptionEl.exists()).toBe(false)
	})

	it('should render the product image with its alt description', () => {
		const productImage = wrapper.find('img')
		expect(productImage.exists()).toBe(true)
		expect(productImage.attributes('alt')).toBeTruthy()
	})
})

describe('Given the hasFigcaption prop is true', () => {

	const wrapper = shallowMount(ShopCard, {
		props: {
			hasFigcaption: true,
		},
	})

	it('should render the figcaption element', () => {
		const figcaptionEl = wrapper.find('figcaption')
		expect(figcaptionEl.exists()).toBe(true)
	})

	it('should render the product name', () => {
		const productName = wrapper.find('.shop-card__title')
		expect(productName.exists()).toBe(true)
	})

	it('should render the product price', () => {
		const productPrice = wrapper.find('.shop-card__price')
		expect(productPrice.exists()).toBe(true)
	})

	it('should have a link', () => {
		const productLink = wrapper.find('a')
		expect(productLink.exists()).toBe(true)
	})
})
