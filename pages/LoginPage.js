const CommonUtils = require('../utils/commonUtils');

class LoginPage {

    constructor(page) {
        this.page = page;

        this.commonUtils = new CommonUtils(page);

        this.loginLink = page.locator('#login2');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator('#logInModal button.btn-primary');
        this.logoutLink = page.locator('#logout2');
    }

    async openApplication() {

        await this.page.goto('/');

        await this.commonUtils.waitForPageLoad();
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async enterUsername(username) {

        await this.usernameInput.waitFor({
            state: 'visible'
        });

        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Used for valid login
    async login(username, password) {

        await this.clickLogin();

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLoginButton();

        await this.logoutLink.waitFor({
            state: 'visible',
            timeout: 15000
        });
    }

    // Used for invalid login
    async attemptLogin(username, password) {

        await this.clickLogin();

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLoginButton();
    }
}

module.exports = LoginPage;