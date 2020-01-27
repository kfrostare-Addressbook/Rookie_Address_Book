describe('user can create a contact', () => {
	('test', () => {
		cy.visit('http://localhost:3001')
	})
})

describe('user can create a contact', () => {
	beforeEach('test', () => {
		cy.visit('http://localhost:3001')
		cy.get('#add-contact').click()
	})
})

describe('user can create a contact', () => {
	beforeEach('test', () => {
		cy.get('#name').type('Thomas')
		cy.get('#email').type('thomas@craft.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
	})
})

describe('user can create a contact', () => {
	beforeEach('displays a name of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Thomas')
	})
	
	beforeEach('displays the phone number of the new contact', () => {
		cy.get('#contact-list').should('contain', '0700 101010')
	})
})

