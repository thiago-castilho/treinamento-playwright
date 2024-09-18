export class SignupLoginPage {
    constructor(page) {
        this.page = page;
        this.loginEmailAdress = this.page.locator('[data-qa=login-email]');
        this.loginPassword = this.page.locator('[data-qa=login-password]');
        this.loginButton= this.page.locator('[data-qa=login-button]');
        this.signupEmailAdress = this.page.locator('[data-qa=signup-name]');
        this.signupPassword = this.page.locator('[data-qa=signup-email]');
        this.signupButton = this.page.locator('[data-qa=signup-button]');
    }

    async validLogin(email, password) {
        await this.loginEmailAdress.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}