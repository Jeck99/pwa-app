describe("Test main page",()=>{
    it("load my app",()=>{
        cy.visit("http://localhost:3000/")
    })
    it("check h1 text",()=>{
        cy.visit("http://localhost:3000/")
        cy.get('[data-testid="h1-home"]')
        .contains("Home")
    })
})
describe("button check",()=>{
    before(()=>{
        cy.visit("/")
    })
     it("check text in button",()=>{
        cy.get('[data-testid="button-no1"]')        
        .contains("Click Here")
        .should('have.class', 'btn-style')
     })
     it("check if onClick working",()=>{
        cy.get('[data-testid="text-input-id"]')
        .type("something");
        cy.get('[data-testid="button-no1"]')  
        .click()
     })
})