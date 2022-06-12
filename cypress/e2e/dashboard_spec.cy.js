describe('Dashboard user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should visit site and see nav bar and all elements', () => {
    cy.get('h1').should('have.text', 'Designer Destination')
    cy.get('.nav-button').eq(0).should('have.text', 'Home')
    cy.get('.nav-button').eq(1).should('have.text', 'Planner')
  })

  it('should see a form with all inputs and submit and button', () => {
    cy.get('label').eq(0).should('be.visible')
    cy.get('label').eq(1).should('be.visible')
    cy.get('label').eq(2).should('be.visible')
    cy.get('label').eq(3).should('be.visible')
    cy.get('input').eq(0).should('have.value', '')
    cy.get('select').eq(0).should('have.value', '')
    cy.get('select').eq(1).should('have.value', '')
    cy.get('select').eq(2).should('have.value', '')
    cy.get('.form-button').should('have.text', 'Submit')
  })

  it('should display usage elements within usage component', () => {
    cy.get('.beach').should('have.attr', 'src').should('include', '/static/media/beach.c35d9b6f1fc5b36962b4.png')
    cy.get('.skydiving').should('have.attr', 'src').should('include', '/static/media/skydiving.149aa69a3f2d89113b4f.png')
    cy.get('.location').should('have.attr', 'src').should('include', '/static/media/location.0e2f1bd375e373fb454d.png')
    cy.get('.usage-container h3').eq(0).should('have.text', 'Destination Variation')
    cy.get('.usage-container h3').eq(1).should('have.text', 'Memorable Experiences')
    cy.get('.usage-container h3').eq(2).should('have.text', 'Plan by Location')
  })

  it('should display suggested trip elements within trip component', () => {
    cy.get('.trip-suggest-title').should('have.text', 'Try one of these suggested trips')
    cy.get('.suggest-card-one .suggest-card-text').should('have.text', 'Las Vegas Nightlife')
    cy.get('.suggest-card-two .suggest-card-text').should('have.text', 'Denver Historical')
    cy.get('.suggest-card-three .suggest-card-text').should('have.text', 'Miami Culture')
    cy.get('.suggest-card-four .suggest-card-text').should('have.text', 'San Francisco Architecture')
  })

})