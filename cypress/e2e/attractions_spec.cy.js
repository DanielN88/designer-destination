describe('Attractions dashboard user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should see attractions when vegas suggestions is clicked', () => {
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
    cy.get('.attraction-card .card-title').eq(0).should('have.text', 'downtown grand hotel & casino')
    cy.get('.attraction-card .card-title').eq(1).should('have.text', 'El Cortez')
  })

  it('should see attraction when search inputs are filled out and submitted',() => {

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/geoname?name=portland&country=us&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'portland-input-place'
    });

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/radius?radius=500&lon=-122.67621&lat=45.52345&kinds=architecture&rate=3&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'portland-input-attractions'
    });

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/xid/Q1385414?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'portland-input-xid1'
    });

    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/xid/Q5169728?apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'portland-input-xid2'
    });

    cy.get('input').click().type('portland')
    cy.get('select').eq(0).select(1).should('have.value', '1600')
    cy.get('select').eq(1).select(4).should('have.value', 'architecture')
    cy.get('select').eq(2).select(1).should('have.value', '3')
    cy.get('.form-button').click()
    cy.wait(1000)
    cy.get('.attraction-card .card-title').eq(0).should('have.text', 'U.S. Bancorp Tower')

  })
  
  it('should display an error message if not all inputs have been filled out ' ,() => {
    cy.get('.form-button').click()
    cy.get('p').eq(1).should('have.text', `Whoops looks like all of the inputs weren't filled out. Please head back and fill out all the inputs before submitting.`)
    cy.get('.attraction-button').should('have.text', 'Return to Search')
    cy.get('.attraction-aside-text').should('have.text', `Didn't find what you were looking for? Try searching again with different parameters.`)
    cy.get('.attraction-aside-button').should('have.text', 'Return Home')
  })

  it('should return an error if fetch fails', () => {
    cy.intercept('GET', "https://api.opentripmap.com/0.1/en/places/geoname?name=las%20vegas&country=us&apikey=5ae2e3f221c38a28845f05b6558bf2c5773e5c69819182775882814a", {
      statusCode: 404,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'vegas-suggest-place'
    });
    
    cy.get('.suggest-card-one').click()
    cy.wait(1000)
    cy.get('p').eq(1).should('have.text', `You might have spelled the city name wrong or something went wrong behind the scenes. Please try again`)
  })

  it('should display an error if you spell the city name wrong', () => {
    cy.get('input').click().type('blah blah blah')
    cy.get('select').eq(0).select(1).should('have.value', '1600')
    cy.get('select').eq(1).select(4).should('have.value', 'architecture')
    cy.get('select').eq(2).select(1).should('have.value', '3')
    cy.get('.form-button').click()
    cy.wait(1000)
    cy.get('p').eq(1).should('have.text', `You might have spelled the city name wrong or something went wrong behind the scenes. Please try again`)
  })
})