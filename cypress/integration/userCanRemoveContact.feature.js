describe('user can remove the contact', () => {
	it('adds a contact and submits', () => {
		cy.get('#name').type('Karro')
		cy.get('#email').type('karro@craft.se')
		cy.get('#phone').type('0700 102030')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Not so Awesome coder')
        cy.get('#submit').click()
	})
})

describe('user can remove the contact', () => {
    it('clicks the remove button', () => {
        cy.get('#remove-button').click()
    	})
})