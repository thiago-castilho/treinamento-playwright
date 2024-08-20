import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('toch@gft.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Teste#1996');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Features Items' })).toBeVisible();
});