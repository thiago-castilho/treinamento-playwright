const { test, expect, request } = require('@playwright/test');

const email = 'thiago.castilho@gft.com';
const password = 'Teste123';

const payload = {
    title: 'Mr',
    name: 'Test',
    email: email,
    password: password,
    birth_date: '6',
    birth_month: '11',
    birth_year: '1996',
    firstname: 'Test',
    lastname: 'Testu',
    company: '',
    address1: 'Street Address',
    address2: '',
    country: 'United States',
    state: 'California',
    city: 'Culver City',
    zipcode: '123456',
    mobile_number: '123456789'
};

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post("https://automationexercise.com/api/createAccount", 
        { form: payload });
    const responseJson = await response.json();
    const status = await responseJson.responseCode;
    expect(status).toBe(201);
});

test('deletar uma conta existente', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')).toBeVisible();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();
    await page.getByRole('link', { name: ' Delete Account' }).click();
    await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible();
    await page.screenshot({ path: './screenshot.png' });
})


