const { test } = require('../fixtures/testFixtures');

const { readJsonData } = require('../utils/dataReader');

const registrationData = readJsonData(
    'registration/registrationData.json'
);

test.describe('@regression Demoblaze Registration Tests - DDT', () => {

    for (const data of registrationData) {

        test(`Registration Test - ${data.username}`, async ({ registrationPage }) => {

            await registrationPage.openApplication();

            await registrationPage.register(
                data.username,
                data.password
            );
        });
    }
});