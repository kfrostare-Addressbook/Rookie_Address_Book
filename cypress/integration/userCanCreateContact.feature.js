describe('user can create two contacts', () => {
	it('adds info about contacts and submits', () => {
		cy.get('#name').type('Thomas')
		cy.get('#email').type('thomas@craft.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
		cy.get('#submit').click()
		cy.get('#name').type('Karro')
		cy.get('#email').type('karro@craft.se')
		cy.get('#phone').type('0700 102030')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Not so Awesome coder')
		cy.get('#submit').click()
	})
})

describe('user can create first contact', () => {
	it('displays a name of the first contact', () => {
		cy.get('#contact-list').should('contain', 'Thomas')
	})
	
	it('displays the phone number of the first contact', () => {
		cy.get('#contact-list').should('contain', '0700 101010')
	})
	it('displays a name of the second contact', () => {
		cy.get('#contact-list').should('contain', 'Karro')
	})
	
	it('displays the phone number of the second contact', () => {
		cy.get('#contact-list').should('contain', '0700 102030')
	})
})
