class CommonUtils {

    constructor(page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }

    async waitForTimeout(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async refreshPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }
}

module.exports = CommonUtils;