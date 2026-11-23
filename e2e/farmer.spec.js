import { test, expect } from '@playwright/test';
const email = process.env.E2E_FARMER_EMAIL;
const password = process.env.E2E_FARMER_PASSWORD;
test.skip(!email || !password, 'Задайте E2E_FARMER_EMAIL и E2E_FARMER_PASSWORD для локального API');
test('фермер авторизуется и видит свою роль', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('E-mail').fill(email);
  await page.getByPlaceholder(/Пароль/).fill(password);
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByText(/Вы вошли как/)).toBeVisible();
});
