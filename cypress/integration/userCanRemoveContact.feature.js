describe('user can remove a contact', () => {
	('test', () => {
		cy.visit('http://localhost:3001')
	})
})

describe('user can remove a contact', () => {
	beforeEach('test', () => {
		cy.visit('http://localhost:3001')
		cy.get('#add-contact').click()
	})
})

describe('user can remove a contact', () => {
	beforeEach('test', () => {
		cy.get('#name').type('Thomas')
		cy.get('#email').type('thomas@craft.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('Awesome coder')
        cy.get('#remove-button').click()
	})
})
