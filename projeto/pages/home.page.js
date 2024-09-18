export class HomePage {

    constructor(page) {
        this.page = page;
        this.url = 'https://automationexercise.com/';
    }


    async goTo() {
        await this.page.goto(this.url);
        // await this.page.waitForLoadState('networkidle');
    }

}
