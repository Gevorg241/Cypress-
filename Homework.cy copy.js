describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
          cy.url().should('contain', "seleniumPractise")
    cy.get('[class="increment"]').first().click();
          cy.get('input.quantity').first().should('value', '2');
    cy.get('[class="product-action"]').first().click();
          cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.html', '<strong>240</strong>')
    cy.get('[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click();
          cy.get('input.quantity').first().should('value', '2');
    cy.contains("PROCEED TO CHECKOUT").click();
          cy.get('#root').should('contain', '240').and('contain', '120').and('contain', '2');
    cy.contains("Place Order").click();
          cy.get('.wrapperTwo').should('be.visible');
    cy.get('select').select('Armenia');
          cy.get('[style="width: 200px;"]').should('value', 'Armenia');
    cy.get('[class="chkAgree"]').click();
          cy.get('[class="chkAgree"]').should('be.checked');
    cy.contains("Proceed").click();
          cy.get('[style="color:green;font-size:25px"]').should('be.visible');

  })    
})