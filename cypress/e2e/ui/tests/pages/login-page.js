import { selectors } from '../../../../support/selectors.js';

export class LoginPage {
    constructor() {}

    login(username, password) {
        cy.get(selectors.login.usernameTextbox).type(username)
        cy.get(selectors.login.passwordTextbox).type(password)
        cy.get(selectors.login.loginButton).click()
        cy.get(selectors.users.SignInButton).click()
     
    }
}
