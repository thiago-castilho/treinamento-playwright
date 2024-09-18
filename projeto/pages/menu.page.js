export class MenuPage {

    constructor(page) {
        this.page = page;
        this.signInLink = page.getByRole('link', { name: ' Signup / Login' });
        this.deleteAccountLink = page.getByRole('link', { name: ' Delete Account' });
    }


    async navigateToSignupLogin() {
        await this.signInLink.click();
    }
    
    async navigateToDeleteAccount() {
        await this.deleteAccountLink.click();

    }

}
