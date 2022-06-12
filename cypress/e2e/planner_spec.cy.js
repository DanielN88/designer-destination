describe('Planner dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should show error message if no attraction have been added to planner', () => {
    cy.get('nav button').eq(1).click()
    cy.get('.planner-aside-text').should('have.text', `You don't have any planned trips yet. Go ahead and add some attractions`)
    cy.get('.planner-text').should('have.text', 'Your trip attractions will be displayed here. Add some attractions!')
  })

  it('should display attraction in planner once added', () => {
    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/geoname?name=las%20vegas&country=us&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'vegas-suggest-place'
    });

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/radius?radius=700&lon=-115.13722&lat=36.17497&kinds=adult&rate=3&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'vegas-suggest-attractions'
    });

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/xid/W206128520?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'vegas-suggest-xid1'
    });

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/xid/W501642314?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'vegas-suggest-xid2'
    });

    cy.get('.suggest-card-one').click()
    cy.wait(1000)
    cy.get('.attraction-card').eq(0).click()
    cy.get('.attraction-button').click()
    cy.get('.attraction-button').should('have.text', 'In planner')
    cy.get('.nav-button').eq(1).click()

    cy.get('.planner-aside-text').should('have.text', 'Looks like you have a pretty good trip planned, ready to start booking flights?')

    cy.get('.attraction-card .card-title').should('have.text', 'downtown grand hotel & casino')
  })

})