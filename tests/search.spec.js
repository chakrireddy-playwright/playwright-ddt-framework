const { expect } = require('@playwright/test');

const { test } = require('../fixtures/testFixtures');

const { readJsonData } = require('../utils/dataReader');

const searchData = readJsonData(
    'product/categoryData.json'
);

test.describe('@smoke Demoblaze Category Tests - DDT', () => {

    for (const data of searchData) {

        test(`Category Test - ${data.category}`, async ({ searchPage }) => {

            await searchPage.openApplication();

            await searchPage.selectCategory(data.category);

            const products = await searchPage.getProductNames();

            console.log(`${data.category} Products:`, products);

            expect(products.length).toBeGreaterThan(0);
        });
    }
});