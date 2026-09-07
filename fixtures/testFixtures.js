const { test: base } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const RegistrationPage = require('../pages/RegistrationPage');
const SearchPage = require('../pages/SearchPage');
const ApiUtils = require('../utils/ApiUtils');

const test = base.extend({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    registrationPage: async ({ page }, use) => {

        const registrationPage = new RegistrationPage(page);

        await use(registrationPage);
    },

    searchPage: async ({ page }, use) => {

        const searchPage = new SearchPage(page);

        await use(searchPage);
    },

    apiUtils: async ({ request }, use) => {

    const apiUtils = new ApiUtils(
        request,
        process.env.API_BASE_URL
    );

    await use(apiUtils);
}

});

module.exports = {
    test
};