import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../../Pageobjects/loginpage.po";

import dashbaord from "../../Pageobjects/dashboard/dashboardpage.po";

Given('User launch the Application', () => {
    
    cy.visit('/')

  })

  When('User enter username as {string}', (username) => {
    
    cy.xpath(login.usernameinput()).type(username)

  })


  When('User enter password as {string}', (password) => {
    
    cy.get(login.passwordinput()).type(password)

  })


  When('User clciks on the Login button', () => {
    
     cy.get(login.loginBtn()).click()

  })


  Then('User should be navigated to dashboard Page', () => {
    
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //or

    cy.url().should("include", "index.php/dashboard/index")
    //or

    cy.contains(dashbaord.dashboardmenu()).should('be.visible')


 }) 


 Then('User should get error message', () => {
    
    cy.contains(login.loginerrormessage()).should('be.visible')

 }) 