describe('user can toggle visibility of the form', () => {
	it('by clicking the "Add Contact" button', () => {
		cy.visit('http://localhost:3001')
		cy.get('#new-contact-form').should('not.be.visible')
		cy.get('#add-contact').click()
		cy.get('#new-contact-form').should('be.visible')
		cy.get('#add-contact').click()
		cy.get('#new-contact-form').should('not.be.visible')
		cy.get('#add-contact').click()
		cy.get('#new-contact-form').should('be.visible')
	})
})

