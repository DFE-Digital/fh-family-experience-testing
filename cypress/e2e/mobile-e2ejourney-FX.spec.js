describe('mobile-e2ejourney-FX.spec',function(){
    let device = ['iphone-x','ipad-mini','samsung-s10','samsung-note9']
        for(let i=0;i<device.length;i++){
    it(`${device[i]} mobile Journey  - basic e2e journey - Start now page - page title`,function(){
        cy.viewport(`${device[i]}`)
        cy.visit('/');
        cy.dfeBrandingMobile()

       
        cy.homepage();
        cy.dfeBrandingMobile()

        cy.searchHubsPage()
        cy.dfeBrandingMobile()

        cy.searchbypostcode('m6 5uj')
        cy.dfeBrandingMobile()

        cy.ServiceFilterPage();
        cy.dfeBrandingMobile()

        cy.mobFamilyHubDetails();
        cy.dfeBrandingMobile()

        cy.mobServiceDetails();
        cy.dfeBrandingMobile()

        // back button 
        cy.get('.govuk-back-link').click();
        cy.searchHubsPage();
    })
}
})