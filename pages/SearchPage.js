class SearchPage {

    constructor(page) {
        this.page = page;

        this.phonesCategory = page.getByText('Phones', { exact: true });
        this.laptopsCategory = page.getByText('Laptops', { exact: true });
        this.monitorsCategory = page.getByText('Monitors', { exact: true });

        this.productNames = page.locator('#tbodyid .card-title a');
    }

    async openApplication() {
        await this.page.goto('/');

        // Wait for the page to be ready
        await this.productNames.first().waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    async selectCategory(category) {

        if (category === 'Phones') {

            await this.phonesCategory.click();

        } else if (category === 'Laptops') {

            await this.laptopsCategory.click();

        } else if (category === 'Monitors') {

            await this.monitorsCategory.click();

        } else {

            throw new Error(`Invalid category: ${category}`);
        }

        // Give Demoblaze time to refresh the product list
        await this.page.waitForTimeout(1000);

        // Wait until at least one product is displayed
        await this.productNames.first().waitFor({
            state: 'visible',
            timeout: 10000
        });
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }
}

module.exports = SearchPage;