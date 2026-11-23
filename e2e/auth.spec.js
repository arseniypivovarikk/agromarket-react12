import { test, expect } from '@playwright/test';
test('пользователь может перейти к регистрации', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Создать аккаунт' }).click();
  await expect(page.getByPlaceholder('Имя')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Зарегистрироваться' })).toBeVisible();
});
test('неверный вход показывает ошибку', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('E-mail').fill('invalid@test.kz');
  await page.getByPlaceholder(/Пароль/).fill('badpass123');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByText(/Неверный e-mail или пароль/i)).toBeVisible();
});
