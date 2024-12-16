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
describe('Test Add Organization', () => {
  // Here we login to the app
  beforeEach(() => {
    cy.loginToApp();
  });

   it('Can Add Organization - Notification', () => {
    cy.viewport('macbook-15');
 
    cy.get(selectors.addOrganization.multiTenantButton).click();
    cy.get(selectors.addOrganization.addOrganizationButton).click(); 
    cy.fixture('testImage.png').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'profileImage.png',
        mimeType: 'image/*',
      });
    }); 
    cy.get(selectors.addOrganization.nameSpace).eq('0').type(`testQA${uuidv4().replace(/-/g, '')}`); 
    cy.get(
      selectors.addOrganization.selectAmode
    ).click(); 
    cy.contains(texts.addOrganization.selectionAssetMode).click({ force: true }); 

    cy.get(selectors.addOrganization.selectHardware).eq(5).click({ force: true }); 
    cy.contains(texts.addOrganization.selectionLinkaHardware).click({ force: true });
    cy.get(selectors.addOrganization.allowAccessFor).eq(6).click({ force: true }); 
    cy.get(selectors.addOrganization.emailSpace).type(
      texts.addOrganization.email
    ); 
    cy.get(selectors.addOrganization.firstNameSpace).type(texts.addOrganization.firstName);
    cy.get(selectors.addOrganization.lastNameSpace).type(texts.addOrganization.lastName);
    cy.get(selectors.addOrganization.submitButtonAddOrg).click({ force: true });
    
    cy.get(selectors.addOrganization.successfullyPopUp).contains(texts.addOrganization.successfullyMessage)

    cy.get(selectors.addOrganization.organizationCreatedMessage).contains(texts.addOrganization.okButton).click()
  });
  it('Can Add Organization - Pricing', () => {
    cy.viewport('macbook-15');
 
    cy.get(
      selectors.addOrganization.multiTenantButton
    ).click();
    cy.get(selectors.addOrganization.addOrganizationButton).click(); 
    cy.fixture('testImage.png').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'profileImage.png',
        mimeType: 'image/*',
      });
    }); 
    cy.get(selectors.addOrganization.nameSpace).eq('0').type(`testQA${uuidv4().replace(/-/g, '')}`); 
    cy.get(
      selectors.addOrganization.selectAmode
    ).click(); 
    cy.contains(texts.addOrganization.selectionAssetMode).click({ force: true }); 

    cy.get(selectors.addOrganization.selectHardware).eq(5).click({ force: true }); 
    cy.contains(texts.addOrganization.selectionLinkaHardware).click({ force: true });
    cy.get(selectors.addOrganization.allowAccessFor).eq(4).click({ force: true }); 
    cy.get(selectors.addOrganization.emailSpace).type(
      texts.addOrganization.email
    ); 
    cy.get(selectors.addOrganization.firstNameSpace).type(texts.addOrganization.firstName);
    cy.get(selectors.addOrganization.lastNameSpace).type(texts.addOrganization.lastName);
    cy.get(selectors.addOrganization.submitButtonAddOrg).click({ force: true });
    
    cy.get(selectors.addOrganization.successfullyPopUp).contains(texts.addOrganization.successfullyMessage)

    cy.get(selectors.addOrganization.organizationCreatedMessage).contains(texts.addOrganization.okButton).click()
  });
  it('Can Add Organization - Toolbox ', () => {
    cy.viewport('macbook-15');
 
    cy.get(
      selectors.addOrganization.multiTenantButton
    ).click();
    cy.wait(3000)
    cy.get(selectors.addOrganization.addOrganizationButton).click(); 
    cy.fixture('testImage.png').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'profileImage.png',
        mimeType: 'image/*',
      });
    }); 
    cy.get(selectors.addOrganization.nameSpace).eq('0').type(`testQA${uuidv4().replace(/-/g, '')}`); 
    cy.get(
      selectors.addOrganization.selectAmode
    ).click(); 
    cy.contains(texts.addOrganization.selectionAssetMode).click({ force: true }); 

    cy.get(selectors.addOrganization.selectHardware).eq(5).click({ force: true }); 
    cy.contains(texts.addOrganization.selectionLinkaHardware).click({ force: true });
    cy.get(selectors.addOrganization.allowAccessFor).eq(8).click({ force: true }); 
    cy.get(selectors.addOrganization.emailSpace).type(
      texts.addOrganization.email
    ); 
    cy.get(selectors.addOrganization.firstNameSpace).type(texts.addOrganization.firstName);
    cy.get(selectors.addOrganization.lastNameSpace).type(texts.addOrganization.lastName);
    cy.get(selectors.addOrganization.submitButtonAddOrg).click({ force: true });
    
    cy.get(selectors.addOrganization.successfullyPopUp).contains(texts.addOrganization.successfullyMessage)

    cy.get(selectors.addOrganization.organizationCreatedMessage).contains(texts.addOrganization.okButton).click()
  });

  it('Can Add Organization - Lite app', () => {
    cy.viewport('macbook-15');
 
    cy.get(
      selectors.addOrganization.multiTenantButton
    ).click();
    cy.wait(3000)
    cy.get(selectors.addOrganization.addOrganizationButton).click(); 
    cy.fixture('testImage.png').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'profileImage.png',
        mimeType: 'image/*',
      });
    }); 
    cy.get(selectors.addOrganization.nameSpace).eq('0').type(`testQA${uuidv4().replace(/-/g, '')}`); 
    cy.get(
      selectors.addOrganization.selectAmode
    ).click(); 
    cy.contains(texts.addOrganization.selectionAssetMode).click({ force: true }); 

    cy.get(selectors.addOrganization.selectHardware).eq(5).click({ force: true }); 
    cy.contains(texts.addOrganization.selectionLinkaHardware).click({ force: true });
    cy.get(selectors.addOrganization.allowAccessFor).eq(7).click({ force: true }); 
    cy.get(selectors.addOrganization.emailSpace).type(
      texts.addOrganization.email
    ); 
    cy.get(selectors.addOrganization.firstNameSpace).type(texts.addOrganization.firstName);
    cy.get(selectors.addOrganization.lastNameSpace).type(texts.addOrganization.lastName);
    cy.get(selectors.addOrganization.submitButtonAddOrg).click({ force: true });
    
    cy.get(selectors.addOrganization.successfullyPopUp).contains(texts.addOrganization.successfullyMessage)

    cy.get(selectors.addOrganization.organizationCreatedMessage).contains(texts.addOrganization.okButton).click()
  });
  it('Can Add Organization - Multi Tenant', () => {
    cy.viewport('macbook-15');
 
    cy.get(
      selectors.addOrganization.multiTenantButton
    ).click();
    cy.wait(3000)
    cy.get(selectors.addOrganization.addOrganizationButton).click(); 
    cy.fixture('testImage.png').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'profileImage.png',
        mimeType: 'image/*',
      });
    }); 
    cy.get(selectors.addOrganization.nameSpace).eq('0').type(`testQA${uuidv4().replace(/-/g, '')}`); 
    cy.get(
      selectors.addOrganization.selectAmode
    ).click(); 
    cy.contains(texts.addOrganization.selectionAssetMode).click({ force: true }); 

    cy.get(selectors.addOrganization.selectHardware).eq(5).click({ force: true }); 
    cy.contains(texts.addOrganization.selectionLinkaHardware).click({ force: true });
    cy.get(selectors.addOrganization.allowAccessFor).eq(3).click({ force: true }); 
    cy.get(selectors.addOrganization.emailSpace).type(
      texts.addOrganization.email
    ); 
    cy.get(selectors.addOrganization.firstNameSpace).type(texts.addOrganization.firstName);
    cy.get(selectors.addOrganization.lastNameSpace).type(texts.addOrganization.lastName);
    cy.get(selectors.addOrganization.submitButtonAddOrg).click({ force: true });
    
    cy.get(selectors.addOrganization.successfullyPopUp).contains(texts.addOrganization.successfullyMessage)

    cy.get(selectors.addOrganization.organizationCreatedMessage).contains(texts.addOrganization.okButton).click()
  });
  it('Can Add Organization - Products', () => {
    cy.viewport('macbook-15');
 
    cy.get(
      selectors.addOrganization.multiTenantButton
    ).click();
    cy.get(selectors.addOrganization.addOrganizationButton).click(); 
    cy.fixture('testImage.png').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'profileImage.png',
        mimeType: 'image/*',
      });
    }); 
    cy.get(selectors.addOrganization.nameSpace).eq('0').type(`testQA${uuidv4().replace(/-/g, '')}`); 
    cy.get(
      selectors.addOrganization.selectAmode
    ).click(); 
    cy.contains(texts.addOrganization.selectionAssetMode).click({ force: true }); 

    cy.get(selectors.addOrganization.selectHardware).eq(5).click({ force: true }); 
    cy.contains(texts.addOrganization.selectionLinkaHardware).click({ force: true });
    cy.get(selectors.addOrganization.allowAccessFor).eq(5).click({ force: true }); 
    cy.get(selectors.addOrganization.emailSpace).type(
      texts.addOrganization.email
    ); 
    cy.get(selectors.addOrganization.firstNameSpace).type(texts.addOrganization.firstName);
    cy.get(selectors.addOrganization.lastNameSpace).type(texts.addOrganization.lastName);
    cy.get(selectors.addOrganization.submitButtonAddOrg).click({ force: true });
    
    cy.get(selectors.addOrganization.successfullyPopUp).contains(texts.addOrganization.successfullyMessage)

    cy.get(selectors.addOrganization.organizationCreatedMessage).contains(texts.addOrganization.okButton).click()
  });
});
