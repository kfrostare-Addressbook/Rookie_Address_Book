describe('user can remove the third contact', () => {
	it('adds three contacts and submits', () => {
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
        cy.get('#name').type('Noel')
		cy.get('#email').type('noel@craft.se')
		cy.get('#phone').type('0700 101050')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Also Awesome coder')
		cy.get('#submit').click()
	})
})

describe('user can remove the Not so Awesome coder', () => {
    it('clicks the remove button for Karro contact', () => {
        cy.get('button[type=remove]').click()
    })
})