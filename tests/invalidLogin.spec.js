const { expect } = require('@playwright/test');

const { test } = require('../fixtures/testFixtures');

const { readJsonData } = require('../utils/dataReader');

const invalidLoginData = readJsonData(
    'login/invalidLoginData.json'
);

test.describe('@regression Demoblaze Invalid Login Tests - DDT', () => {
    
    for (const data of invalidLoginData) {

        test(`Invalid Login Test - ${data.username}`, async ({ loginPage, page }) => {

            await loginPage.openApplication();

            const dialogPromise = page.waitForEvent('dialog');

            await loginPage.attemptLogin(
                data.username,
                data.password
            );

            const dialog = await dialogPromise;

            const message = dialog.message();

            console.log(`Alert message: ${message}`);

            expect(message).toMatch(
                /User does not exist|Wrong password|Please fill out Username and Password/i
            );

            await dialog.accept();
        });
    }
});