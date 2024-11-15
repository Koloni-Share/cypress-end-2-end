import { selectors } from '../support/selectors';
import { texts } from '../support/texts';
import { env } from '../fixtures/environment.qa.json';
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}
describe('Test Add Reservation', () => {
  // Here we login to the app
  beforeEach(() => {
    cy.loginToApp();
  });

  
  
  it('Can Add Reservation with Recurring Periods', () => {
    cy.get(selectors.mainPage.menuOptions).click();
    cy.get(':nth-child(7) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiGrid-root > :nth-child(1)').click()
    cy.wait(5000)
    cy.get('#reservation_form_delivery_select_mode',{timeout:20000}).click()
    cy.get('.MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root').click()
 
    cy.get('.MuiOutlinedInput-notchedOutline',{timeout:20000}).eq(1).click({force:true})
    cy.contains('aaalene22@ole.augie.edu',{timeout:10000}).click({force:true})
    cy.contains('Recurring Periods').click({force:true})

    cy.get('button[aria-label="Choose date"]').eq(0).click({force:true}) //dateselector
    cy.get('.MuiPickersDay-today').click({force:true})
    cy.get('.css-1xx2uuv').click({force:true}) //form
    cy.wait(500)
    cy.get('button[aria-label="Choose date"]').eq(0).click({force:true})
    cy.get('.MuiPickersDay-today').click({force:true})
    cy.get('.css-1xx2uuv').click({force:true}) //form
    cy.wait(500) 
    cy.get('.MuiSelect-outlined').eq(1).click({force:true})
    cy.wait(500)
    cy.get('#mui-component-select-id_product').click({force:true}) //producto dropdown
    cy.wait(500)
    cy.get('.MuiMenuItem-gutters').eq(0).click({force:true}) //opcion producto
    cy.get('button[type="submit"]').click({force:true})
  });


    

    
   }) 
  
  
//   it('Opens site menu', () => { 
  
//     cy.get(selectors.mainPage.menuOptions).click()
// //falta assertion
// //cy.get('.MuiToolbar-root').contains(texts.main.dashboardText)

//   }) 


