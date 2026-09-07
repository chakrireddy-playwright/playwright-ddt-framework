const { expect } = require('@playwright/test');

const { test } = require('../../fixtures/testFixtures');

const apiEndpoints = require('../../config/apiEndpoints');

test.describe('@regression UI + API Hybrid Tests', () => {

    test('API Response + UI Validation', async ({ apiUtils, page }) => {

        // Step 1: Get products through API
        const apiResponse = await apiUtils.get(
            apiEndpoints.entries
        );

        expect(apiResponse.status()).toBe(200);

        const apiData = await apiUtils.getJson(apiResponse);

        console.log(
            'API Product Count:',
            apiData.Items.length
        );

        expect(apiData.Items.length).toBeGreaterThan(0);


        // Step 2: Open Demoblaze UI
        await page.goto('/');

        // Step 3: Get products from UI
        const uiProducts = page.locator(
            '#tbodyid .card-title a'
        );

        await uiProducts.first().waitFor({
            state: 'visible',
            timeout: 10000
        });

        const uiProductNames =
            await uiProducts.allTextContents();

        console.log(
            'UI Product Count:',
            uiProductNames.length
        );

        expect(uiProductNames.length).toBeGreaterThan(0);


        // Step 4: Compare API and UI product counts
        expect(uiProductNames.length).toBe(
            apiData.Items.length
        );
    });

});