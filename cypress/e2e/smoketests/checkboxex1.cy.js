describe('checkbox Test', function () {

    it('Working with Check boxes', function () {
 
       cy.visit("https://register.rediff.com/register/register.php");

 //CheckBox 
 
       cy.get('input[name^=chk_altemail]').check().should('be.checked');
 
        cy.wait(10000)
 
        cy.xpath('//input[starts-with(@name,"chk_altemail")]').uncheck().should('not.be.checked');
 
  // //Radio 
 
        cy.xpath('//input[@value="f"]', { timeout: 20000 }).check().should('be.checked');

  // //Uncheck will not work for Radio
 
  // //Dropdowns

  //  //3 ways we can handle 

  //     //Text
 
         cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(4).should("have.value", "04" )
 
  //     //Value
 
       cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("09").should("have.value", "09" )
 
  //   // Index 

     cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(2).should("have.value", "02" )
 
    });
 });
 