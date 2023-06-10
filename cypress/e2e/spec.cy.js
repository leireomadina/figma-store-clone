describe('My First Test', () => {

	beforeEach(() => {
		cy.visit('/') // visits the baseUrl
	})

	it('opens the home page', () => {
		cy.contains('Figma\'s')
	})

	it('shows the menu when the hamburger button is clicked', () => {
		cy.get('header').should('not.have.class', 'full-screen')
		cy.get('button.hamburger-menu__btn').click()
		cy.get('header').should('have.class', 'full-screen')
	})
})
