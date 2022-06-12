describe('Attraction dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display all elements in attraction details', () => {
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
    cy.get('.attraction-title').should('have.text', 'downtown grand hotel & casino')
    cy.get('.attraction-address').should('have.text', '201 North 3rd Street, Clark County Nevada 89101')
    cy.get('.attraction-text').should('have.text', 'The Downtown Grand, formerly the Lady Luck, is a hotel and casino in downtown Las Vegas, Nevada, owned by CIM Group and operated by Fifth Street Gaming. The Downtown Grand is the centerpiece of Downtown3rd, a new neighborhood and entertainment district in downtown Las Vegas.')
    cy.get('.attraction-button').should('have.text', 'Add to planner')
    cy.get('img').should('have.attr', 'src').should('include', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Downtown_Grand_%28Las_Vegas%2C_Nevada%29.jpg/400px-Downtown_Grand_%28Las_Vegas%2C_Nevada%29.jpg')
  })
})