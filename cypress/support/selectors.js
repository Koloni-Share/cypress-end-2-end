export const selectors = {
    login: {
        usernameTextbox: '#\\:r1\\:',
        passwordTextbox: '#\\:r2\\:',
        loginButton: '.MuiButton-root'
    },
    mainPage: {
        mainHeader: '.MuiToolbar-root', 
        menuOptions: '.css-1dzfugc'


    },
    navigationMenu: {
        
    },
    users: {
        SignInButton: '.css-1dzfugc',
        PeopleTab: ':nth-child(6) > .MuiListItemText-root > .MuiTypography-root',
        UsersTab: ':nth-child(1) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root',
        addUserButton:'.MuiGrid-root > .MuiButton-root', 
        name: '#\\:ri\\:',
        email: '\\:rk\\',
        phoneNumber: '\\:rj\\',
        address: '\\:rl\\',
        userId: '\\:rm\\',
        pinCode: '\\:rn\\', 
        SubmitButton: '.MuiLoadingButton-root', 
        modal: {
            title: '.MuiTypography-h2',
            submitButton: '.MuiBox-root > .MuiButton-root',
            message: '.css-rktmqn > .MuiTypography-body1', 
        }
    },
    reservations:{
        addNewReservationForm:{
            modeDropdown:"[id='mui-component-select-mode']",
            deliveryOption: '[data-value="delivery"]',
            trackingNumberInput: 'input[placeholder="Enter tracking number here"]',
            locationDropdown: 'input[placeholder="Select a location"]',
            usernameInput: 'input[placeholder="Enter user name here"]',
            phoneNumberInput: 'input[placeholder="Enter phone number here"]',
            sizeDropdown: '#mui-component-select-id_size',
            submitButton: 'Submit' 
        }
    }

}