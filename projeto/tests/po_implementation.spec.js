const { test, expect, request } = require('@playwright/test');
const { POManager } = require('../pages/pomanager');
const { ScreenshotUtils } = require('../utils/screenshot.utils');

const dataSet = JSON.parse(JSON.stringify(require("../data/create_account.data.json")));


test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post("https://automationexercise.com/api/createAccount",
        { form: dataSet });
    const responseJson = await response.json();
    const status = await responseJson.responseCode;
    expect(status).toBe(201);
});

test('deletar uma conta existente', async ({ page }) => {
    const pomanager = new POManager(page);

    await pomanager.getHomePage().goTo();
    await pomanager.getMenuPage().navigateToSignupLogin();
    await pomanager.getSignupLoginPage().validLogin(dataSet.email, dataSet.password);
    await pomanager.getMenuPage().navigateToDeleteAccount();
    await expect(pomanager.getDeleteAccountPage().title).toBeVisible();
    const screenshot = new ScreenshotUtils(page);
    await screenshot.takeScreenshot();
})


