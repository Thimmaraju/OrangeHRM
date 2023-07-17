import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import dashbaord from "../../Pageobjects/dashboard/dashboardpage.po";
import addemployee from "../../Pageobjects/PIM/addemployeepage.po";

When('User clicks on the PIM Menu', () => {
    
    
    cy.contains(dashbaord.pimMenu()).click()

 })

 When('User clicks on the Add Employee', () => {
    
    
    cy.contains(addemployee.addemployeesubmenu()).click()

 })

 When('User Enter firstname as {string}', (firstname) => {
    
    
      cy.get(addemployee.firstnameInput()).type(firstname)
 })


 When('User Enter lastname as {string}', (lastname) => {
    
    
    cy.get(addemployee.lastnameInput()).type(lastname)
})


When('User clicks on Save button', () => {
    
    
   cy.get(addemployee.saveBtn()).click()
})


Then('User should get succcessfull message', () => {
    
    cy.contains("Successfully Saved").should("be.visible");
 })

 Then('User get error message like Required', () => {
    
    cy.contains(addemployee.errormessageFirstname()).should("be.visible");
 })
