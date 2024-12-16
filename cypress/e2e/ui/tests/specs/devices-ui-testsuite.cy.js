import { LocationsApiHelper } from '../../../api/tests/helpers/locations-api-helper.js'
import { SizesApiHelper } from '../../../api/tests/helpers/sizes-api-helper.js'
import { DevicesApiHelper } from '../../../api/tests/helpers/devices-api-helper.js'
import { faker } from '@faker-js/faker'
import { LoginPage } from '../pages/login-page.js'
import { sizeData, locationData, deviceData, reservationData } from '../../../../support/data.cy.js'
import { NavigationMenu } from '../pages/navigation-menu.js'
import { DevicesPage } from '../pages/devices-page.js'

const locationsApiHelper = new LocationsApiHelper()
const sizesApiHelper = new SizesApiHelper()
const loginPage = new LoginPage()
const navigationMenu = new NavigationMenu()
const devicesPage = new DevicesPage()
const devicesApiHelper = new DevicesApiHelper()

describe('Devices Test Suite', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(Cypress.env('baseUrl'))
        cy.loginByAPI() 
    })

    it('should successfully create a new device', () => {
        cy.get('@authToken').then((token) => {
            const SUFFIX_LENGTH = 4

            sizeData.name = `My Size-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
            locationData.name = `A3-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`
            deviceData.name = `My Device-${faker.string.alphanumeric(SUFFIX_LENGTH).toUpperCase()}`

            locationsApiHelper.createLocation(token, locationData).then((createlocationResponse) => {
                const locationId = createlocationResponse.body.id
                const locationName = createlocationResponse.body.name

                sizesApiHelper.createSize(token, sizeData).then((createSizeResponse) => {
                    const sizeName = createSizeResponse.body.name
                    const sizeId = createSizeResponse.body.id

                    deviceData.id_location = locationId
                    deviceData.id_size = sizeId

                    loginPage.login(Cypress.env('username'), Cypress.env('password'))
                    navigationMenu.navigateToDevices()
                    devicesPage.createNewDevice(deviceData.name, sizeName, locationName)

                    // Assertions:
                    cy.contains('h2', 'Success').should('be.visible')        
                    cy.contains('p', 'Device created successfully').should('be.visible')

                    cy.get('@authToken').then((token) => {
                        devicesApiHelper.getDevicebyName(token, deviceData.name).then((getDeviceResponse) => {
                            const deviceId = getDeviceResponse.body.id
                            devicesApiHelper.deleteDeviceById(token, deviceId)

                            locationsApiHelper.getLocationByName(token, locationName).then((getLocationResponse) => {
                                const locationId = getLocationResponse.body.id
                                locationsApiHelper.deleteLocationById(token, locationId)
                            })
                            sizesApiHelper.getSizeByName(token, sizeName).then((getSizeResponse) => {
                              const sizeId = getSizeResponse.body.id
                              sizesApiHelper.deleteSizeById(token, sizeId)
                          })
                        })
                    })
                })       
            })
        })
    })
})
