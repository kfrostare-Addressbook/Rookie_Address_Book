describe('user can remove the contact', () => {
    it('clicks the remove button', () => {
        cy.get('#contact-list').should('contain', 'Karro', '#remove-button').click()
        cy.get('input[Karro]').should('not.exist')
        cy.get('#contact-list').should('contain', 'Thomas')
        cy.get('#contact-list').not('contain', 'Karro')
    	})
})