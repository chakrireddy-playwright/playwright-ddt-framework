const { expect } = require('@playwright/test');

const { test } = require('../../fixtures/testFixtures');

const { readJsonData } = require('../../utils/dataReader');

const apiEndpoints = require('../../config/apiEndpoints');

const userData = readJsonData(
    'api/userData.json'
);

test.describe('@smoke Demoblaze API Tests - DDT', () => {

    for (const data of userData) {

        test(`API Signup Test - ${data.username}`, async ({ apiUtils }) => {

            const response = await apiUtils.post(
                apiEndpoints.signup,
                {
                    username: data.username,
                    password: data.password
                }
            );

            const statusCode = apiUtils.getStatus(response);

            console.log(
                `${data.username} Status:`,
                statusCode
            );

            expect(statusCode).toBe(200);

            const responseBody = await apiUtils.getText(response);

            console.log(
                `${data.username} Response:`,
                responseBody
            );
        });
    }


    test('GET API Test - Get Products', async ({ apiUtils }) => {

        const response = await apiUtils.get(
            apiEndpoints.entries
        );

        const statusCode = apiUtils.getStatus(response);

        expect(statusCode).toBe(200);

        const responseBody = await apiUtils.getJson(response);

        expect(responseBody).toHaveProperty('Items');

        expect(responseBody.Items.length).toBeGreaterThan(0);

        console.log(
            'Total Products:',
            responseBody.Items.length
        );
    });

});