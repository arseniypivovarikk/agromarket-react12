import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard.jsx';
import { renderWithProviders } from '../test/utils.jsx';
const honey = { id: 2, name: 'Мёд гречишный', price: 3500, category: 'Мёд' };
describe('ProductCard', () => {
  test('shows product title', () => { renderWithProviders(<ProductCard product={honey} onAdd={() => {}} />); expect(screen.getByText(honey.name)).toBeInTheDocument(); });
  test('shows price', () => { renderWithProviders(<ProductCard product={honey} onAdd={() => {}} />); expect(screen.getByText('3500 тг')).toBeInTheDocument(); });
  test('shows featured badge when featured', () => { renderWithProviders(<ProductCard product={honey} onAdd={() => {}} featured />); expect(screen.getByText('Товар недели')).toBeInTheDocument(); });
  test('calls add-to-cart callback', async () => { const user = userEvent.setup(); const add = vi.fn(); renderWithProviders(<ProductCard product={honey} onAdd={add} />); await user.click(screen.getByRole('button', { name: 'В корзину' })); expect(add).toHaveBeenCalledWith(honey); });
});
