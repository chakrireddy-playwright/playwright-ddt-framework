const { expect } = require('@playwright/test');

const { test } = require('../fixtures/testFixtures');

const { readJsonData } = require('../utils/dataReader');

const loginData = readJsonData(
    'login/validLoginData.json'
);

test.describe('@smoke Demoblaze Valid Login Tests - DDT', () => {
    
    for (const data of loginData) {

        test(`Valid Login Test - ${data.username}`, async ({ loginPage }) => {

            await loginPage.openApplication();

            await loginPage.login(
                data.username,
                data.password
            );

            await expect(loginPage.logoutLink).toBeVisible();

        });

    }

});