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

<<<<<<< Updated upstream
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
     
=======
     cy.get(selectors.reservationsMenu.addReservationButton).click()
     cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
     cy.get(selectors.reservations.addNewReservationForm.serviceOption).click()
     cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
     cy.addReservation();
>>>>>>> Stashed changes
   }),

   it('Can Delete a Reservation', () => {
    cy.get(selectors.reservations.reservationCheckBox).click()
    cy.get(selectors.reservations.deleteButton).click()
    cy.get(selectors.reservations.yesDeletionButton).click()
    cy.get(selectors.reservations.deletionPopUp).contains('Success')
    cy.get(selectors.reservations.okDeletionButton).click()
  
  }) , 



  it('Add Vending Reservation', () => {

<<<<<<< Updated upstream
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
    })  , 

    it('Can Delete a Reservation', () => {
      cy.get(selectors.reservations.reservationCheckBox).click()
      cy.get(selectors.reservations.deleteButton).click()
      cy.get(selectors.reservations.yesDeletionButton).click()
      cy.get(selectors.reservations.deletionPopUp).contains('Success')
      cy.get(selectors.reservations.okDeletionButton).click()
    
=======
     cy.get(selectors.reservationsMenu.addReservationButton).click()
     cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
     cy.get(selectors.reservations.addNewReservationForm.vendingOption).click()
     cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
     cy.addReservation();
    })  , 

   
    it('Add Service Reservation with RP', () => {
      cy.get(selectors.reservationsMenu.addReservationButton).click()
      cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
      cy.get(selectors.reservations.addNewReservationForm.serviceOption).click()
      cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
      cy.addRecurringPeriod();
    })  , 


    // This method add Vending Reservation with Recurring Periods // 
      it('Add Vending Reservation with RP', () => {

      cy.get(selectors.reservationsMenu.addReservationButton).click()
      cy.get(selectors.reservations.addNewReservationForm.modeArrowButton).click()
      cy.get(selectors.reservations.addNewReservationForm.vendingOption).click()
      cy.get(selectors.reservations.addNewReservationForm.selectUserBox,{timeout:500000}).type(texts.reservations.userSelection)
      cy.addRecurringPeriod();
>>>>>>> Stashed changes
    }) 
   
   
  }) 



