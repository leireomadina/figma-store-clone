import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from '../../components/TheHeader.vue'
import TheHamburgerMenu from '../../components/TheHamburgerMenu.vue'
import TheModalMenu from '../../components/TheModalMenu.vue'

describe('The Header component', () => {

	const wrapper = mount(TheHeader, {
		props: {
			isMenuOpen: false,
			isAriaExpanded: false,
		},
	})

	it('should render the logo image with its alt description', () => {
		const logo = wrapper.find('img.logo')

		expect(logo.exists()).toBe(true)
		expect(logo.attributes('alt')).toBeTruthy()
	})

	it('should reload the page after clicking the logo', () => {
		const logoLink = wrapper.find('.header__logo-link')

		expect(logoLink.exists()).toBe(true)
		expect(logoLink.attributes('title')).toBeTruthy()
		expect(logoLink.attributes('href')).toBe('/')
	})

	it('should render the search button image with its title and alt', () => {
		const searchButton = wrapper.find('button.search')
		const searchImage = wrapper.find('.search__image')

		expect(searchButton.exists()).toBe(true)
		expect(searchButton.attributes('title')).toBeTruthy()

		expect(searchImage.exists()).toBe(true)
		expect(searchImage.attributes('alt')).toBeTruthy()
		expect(searchImage.attributes('src')).toBeTruthy()
	})

	it('should render the location button image with its title and alt', () => {
		const locationButton = wrapper.find('button.location')
		const locationImage = wrapper.find('.location__image')

		expect(locationButton.exists()).toBe(true)
		expect(locationButton.attributes('title')).toBeTruthy()

		expect(locationImage.exists()).toBe(true)
		expect(locationImage.attributes('alt')).toBeTruthy()
		expect(locationImage.attributes('src')).toBeTruthy()
	})

	it('should render the cart button with its title and be zero initially', () => {
		const cartButton = wrapper.find('button.cart')

		expect(cartButton.exists()).toBe(true)
		expect(cartButton.attributes('title')).toBeTruthy()
		expect(cartButton.text()).toBe('0')
	})

	it('should render the child components with their own props', () => {
		const hamburgerMenu = wrapper.findComponent(TheHamburgerMenu)
    const modalMenu = wrapper.findComponent(TheModalMenu)

		expect(hamburgerMenu.exists()).toBe(true)
    expect(modalMenu.exists()).toBe(true)

		expect(hamburgerMenu.props('isMenuOpen')).toBe(false)
		expect(hamburgerMenu.props('isAriaExpanded')).toBe(false)

		expect(modalMenu.props('isMenuOpen')).toBe(false)
	})
	
	it('should go full screen and change the background color after opening the menu', async () => {
		const headerTag = wrapper.find('header')
		const headerInnerContainer = wrapper.find('.header')
		const hamburgerMenuComponent = wrapper.findComponent(TheHamburgerMenu)
		const hamburgerMenuButton = hamburgerMenuComponent.find('.hamburger-menu__btn')
		
		expect(headerTag.classes('full-screen')).toBe(false)
		expect(headerInnerContainer.classes('header--light')).toBe(false)

		await hamburgerMenuButton.trigger('click')
		
		expect(headerTag.classes('full-screen')).toBe(true)
		expect(headerInnerContainer.classes('header--light')).toBe(true)
	})
})