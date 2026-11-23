import { test, expect } from '@playwright/test';
test('@smoke главная загружается и каталог показывает карточки', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/АгроМаркет/i);
  await expect(page.getByTestId('product-card').first()).toBeVisible();
});
test('поиск фильтрует товары', async ({ page }) => {
  await page.goto('/');
  const search = page.getByPlaceholder('Поиск товара...');
  await search.fill('мёд');
  await expect(page.getByText(/мёд/i).first()).toBeVisible();
  await expect(page.getByTestId('product-card')).toHaveCount(1);
});
test('кнопка корзины увеличивает счётчик', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('product-card').first().getByRole('button', { name: 'В корзину' }).click();
  await expect(page.getByText('Корзина: 1')).toBeVisible();
});
test('@smoke карточки товаров доступны после загрузки', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('product-card')).toHaveCount(5);
});
