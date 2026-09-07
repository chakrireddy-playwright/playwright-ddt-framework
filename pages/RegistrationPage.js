class RegistrationPage {

    constructor(page) {
        this.page = page;

        this.signUpLink = page.locator('#signin2');
        this.usernameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpButton = page.locator('#signInModal button.btn-primary');
    }

    async openApplication() {
        await this.page.goto('/');
    }

    async clickSignUp() {
        await this.signUpLink.click();
    }

    async enterUsername(username) {
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

    async register(username, password) {

        await this.clickSignUp();

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickSignUpButton();
    }
}

module.exports = RegistrationPage;  