/* eslint-disable max-len */

describe('| 🍪 CookiesTest |', function() {
  
    it(`Cookies Main Banner `, function() {
      cy.visit(`/cookies`);
      cy.cookies();
    });

    it(`No cookies selection made`, function() {
      cy.visit(`/`);
      cy.getCookie('cookies_policy').should('eq', null);
      cy.getCookie('cookies_preferences_set').should('eq', null);
    });

    it(`Cookies on all pages`, function() {
      cy.clearCookies();
        cy.visit(`/`);
        cy.cookies();
        cy.homepage();
        cy.cookies();
        cy.searchHubsPage()
        cy.cookies();
        cy.searchbypostcode('E1 5JY')
        cy.cookies();
        
    });

    it(`Accept Cookies ,Hide Banner`, function() {
      cy.visit(`/`);
      cy.contains('Accept analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-accept > .govuk-button-group > .govuk-button').wait(200).click();

      // cy.getCookie('service_directory_cookies_policy')
      //       .should('have.property', 'value', '{\"analytics\":true,\"version\":1}');
      cy.getCookie('ARRAffinitySameSite')
            .should('have.property', 'value', '01bbe5bef8be6b3bd48667c5ac539b6a4ffc62f6464dd0bd98adcd189e77ef8e');
    
      // cy.clearCookies();
    });

    it(`Reject Cookies ,Hide Banner`, function() {
      cy.visit(`/`);
      cy.contains('Reject analytics cookies').wait(500).click().wait(400);
      cy.get('.js-cookie-banner-confirmation-reject > .govuk-button-group > .govuk-button').wait(200).click();
      // cy.getCookie('service_directory_cookies_policy')
      //       .should('have.property', 'value', '{\"analytics\":true,\"version\":1}');
      cy.getCookie('ARRAffinitySameSite')
            .should('have.property', 'value', 'c2dc5cdfd83d18a581d6889c06f1e64b4cf50672e89dc41e380fd2aab9a84769');
    });

    it(`View Cookies - Yes Selection `, function() {
      cy.clearCookies();
      cy.visit(`/`);
      // view cookies
      cy.get('.govuk-button-group > .govuk-link').click();
      cy.cookiesPageContent()
      cy.get('#analytics-cookies-yes').click()
      cy.get('.js-cookies-page-form > .govuk-button').click()
      // cy.getCookie('service_directory_cookies_policy')
      //       .should('have.property', 'value', '{\"analytics\":true,\"version\":1}');
      cy.getCookie('ARRAffinitySameSite')
            .should('have.property', 'value', '01bbe5bef8be6b3bd48667c5ac539b6a4ffc62f6464dd0bd98adcd189e77ef8e');
    
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();


      // cy.getCookie('cookies_policy').should('have.property', 'value',
      //     '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22true%22%7D');
      // cy.getCookie('cookies_preferences_set').should('have.property', 'value', 'true');
      cy.clearCookies();
    });

    it(`View Cookies - No Selection `, function() {
      cy.clearCookies();
      cy.visit(`/`);
      // view cookies
      cy.get('.govuk-button-group > .govuk-link').click();
      cy.cookiesPageContent()
      cy.get('#analytics-cookies-no').click()
      
      cy.get('.js-cookies-page-form > .govuk-button').click()
      cy.getCookie('ARRAffinitySameSite')
            .should('have.property', 'value', 'c2dc5cdfd83d18a581d6889c06f1e64b4cf50672e89dc41e380fd2aab9a84769');
      
      cy.get('.govuk-notification-banner').contains('You’ve set your cookie preferences.');
      cy.get('.govuk-notification-banner').contains('Go back to the page you were looking at').click();

      cy.homepage();

      // cy.getCookie('cookies_policy').should('have.property', 'value',
      //     '%7B%22settings%22%3Atrue%2C%22usage%22%3A%22false%22%2C%22remember_settings%22%3A%22true%22%7D');
      // cy.getCookie('cookies_preferences_set').should('have.property', 'value', 'true');
    });
  
});