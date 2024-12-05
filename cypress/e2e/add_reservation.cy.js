import { selectors } from "../support/selectors"
import {texts} from "../support/texts"
import {env} from "../fixtures/environment.qa.json"
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test Reservation', () => {

  beforeEach(() => {
    cy.loginToApp();
    cy.navigateToReservation()
  })
  
  it('Add Service Reservation', () => {

     cy.get(selectors.reservationsMenu.addReservationButton).click()
     cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
     cy.get(selectors.reservations.addNewReservationForm.serviceOption).click()
     cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
     cy.get(selectors.reservations.addNewReservationForm.userSelected,{timeout:600000}).eq(0).click({force:true})  
     cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(0).click({force:true}) 
     cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('20').click({force:true})
     cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(1).click({force:true}) 
     cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('27').click({force:true})
     cy.get(selectors.reservations.addNewReservationForm.locationField).eq(3).click({force:true})
     cy.wait(500)
     cy.get(selectors.reservations.addNewReservationForm.locationSelected,{timeout:600000}).eq(0).click({force:true})
     cy.get(selectors.reservations.addNewReservationForm.sizeField).click()
     cy.get(selectors.reservations.addNewReservationForm.sizeSelected).click()
     cy.get(selectors.reservations.addNewReservationForm.submitReservationButton).click()
     cy.get(selectors.reservations.addNewReservationForm.successPopUp).contains('Success')
     cy.get(selectors.reservations.addNewReservationForm.okSuccessButton).click()
     cy.deleteReservation()
   }),

  it('Add Vending Reservation', () => {

     cy.get(selectors.reservationsMenu.addReservationButton).click()
     cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
     cy.get(selectors.reservations.addNewReservationForm.vendingOption).click()
     cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
     cy.get(selectors.reservations.addNewReservationForm.userSelected,{timeout:600000}).eq(0).click({force:true})  
     cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(0).click({force:true}) 
     cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('20').click({force:true})
     cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(1).click({force:true}) 
     cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('27').click({force:true})
     cy.get(selectors.reservations.addNewReservationForm.locationField).eq(3).click({force:true})
     cy.wait(500)
     cy.get(selectors.reservations.addNewReservationForm.locationSelected,{timeout:600000}).eq(3).click({force:true})
     cy.get(selectors.reservations.addNewReservationForm.sizeField).click()
     cy.get(selectors.reservations.addNewReservationForm.sizeSelected).click()
     cy.get(selectors.reservations.addNewReservationForm.submitReservationButton).click()
     cy.get(selectors.reservations.addNewReservationForm.successPopUp).contains('Success')
     cy.get(selectors.reservations.addNewReservationForm.okSuccessButton).click()
     cy.deleteReservation()
    })  , 

   
    it('Add Service Reservation with RP', () => {
      cy.get(selectors.reservationsMenu.addReservationButton).click()
      cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
      cy.get(selectors.reservations.addNewReservationForm.serviceOption).click()
      cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
      cy.get(selectors.reservations.addNewReservationForm.userSelected,{timeout:600000}).eq(0).click({force:true})  
      cy.contains('Recurring Periods').click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(0).click({force:true}) 
      cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('20').click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(1).click({force:true}) 
      cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('27').click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.locationField).eq(3).click({force:true})
      cy.wait(500)
      cy.get(selectors.reservations.addNewReservationForm.locationSelected,{timeout:600000}).eq(0).click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.sizeField).click()
      cy.get(selectors.reservations.addNewReservationForm.sizeSelected).click()
      cy.get(selectors.reservations.addNewReservationForm.submitReservationButton).click()
      cy.get(selectors.reservations.addNewReservationForm.successPopUp).contains('Success')
      cy.get(selectors.reservations.addNewReservationForm.okSuccessButton).click()
      cy.deleteReservation() 
    })  , 


    // This method add Vending Reservation with Recurring Periods // 
      it('Add Vending Reservation with RP', () => {

      cy.get(selectors.reservationsMenu.addReservationButton).click()
      cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
      cy.get(selectors.reservations.addNewReservationForm.vendingOption).click()
      cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
      cy.get(selectors.reservations.addNewReservationForm.userSelected,{timeout:600000}).eq(0).click({force:true})  
      cy.contains('Recurring Periods').click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(0).click({force:true}) 
      cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('20').click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.calendarDate).eq(1).click({force:true}) 
      cy.get(selectors.reservations.addNewReservationForm.timeSelection, {timeout:500000}).contains('27').click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.locationField).eq(3).click({force:true})
      cy.wait(500)
      cy.get(selectors.reservations.addNewReservationForm.locationSelected,{timeout:600000}).eq(0).click({force:true})
      cy.get(selectors.reservations.addNewReservationForm.sizeField).click()
      cy.get(selectors.reservations.addNewReservationForm.sizeSelected).click()
      cy.get(selectors.reservations.addNewReservationForm.submitReservationButton).click()
      cy.get(selectors.reservations.addNewReservationForm.successPopUp).contains('Success')
      cy.get(selectors.reservations.addNewReservationForm.okSuccessButton).click()
      cy.deleteReservation()
    }) 

   
  }) 



