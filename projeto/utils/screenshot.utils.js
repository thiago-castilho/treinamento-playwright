export class ScreenshotUtils {
    constructor(page) {
        this.page = page;
    }

    async takeScreenshot() {
        await this.page.screenshot({path: './screenshots/conta_deletada' + new Date().getTime() + '.png'});
    }
}