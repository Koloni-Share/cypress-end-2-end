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
        locationsMenuItem: ':nth-child(1) > .MuiTypography-inherit > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root'
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
            modeDropdown:'#reservation_form_delivery_select_mode',
            deliveryOption: '[data-value="delivery"]',
            trackingNumberInput: '#reservation_form_delivery_input_tracking_number',
            locationDropdown: '#reservation_form_delivery_select_location',
            usernameInput: '#reservation_form_delivery_input_user_name',
            phoneNumberInput: '#reservation_form_delivery_input_phone_number',
            sizeDropdown: '#reservation_form_delivery_select_size',
            submitButton: 'Submit' 
        }
    },
    locations:{
        addLocationButton:"[name='addLocation']",
        addnewLocationform:{
            nameInput:'input[placeholder="Name"]',
            addressInput:'input[name="address"]',
            CustomerSupportAddNewRadioButon:'.MuiFormGroup-root > :nth-child(2) > .MuiTypography-root',
            emailInput:'input[placeholder="user@domain.com"]',
            phoneNumberInput:'input[placeholder="+12345678900"]'
        }
    }

}