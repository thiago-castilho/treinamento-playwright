import { DeleteAccountPage } from "./delete_account.page";
import { HomePage } from "./home.page";
import { MenuPage } from "./menu.page";
import { SignupLoginPage } from "./signup_login.page";

export class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.menuPage = new MenuPage(this.page);
        this.signupLoginPage = new SignupLoginPage(this.page);
        this.deleteAccountPage = new DeleteAccountPage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getMenuPage() {
        return this.menuPage;
    }

    getSignupLoginPage() {
        return this.signupLoginPage;
    }

    getDeleteAccountPage() {
        return this.deleteAccountPage;
    }

}