import { screen } from '@testing-library/react';
import { http, HttpResponse, delay } from 'msw';
import App from './App.jsx';
import { renderWithProviders } from './test/utils.jsx';
import { server } from './test/server.js';
describe('App catalog states', () => {
 test('renders mocked products', async () => { renderWithProviders(<App />); expect(await screen.findByText('Картофель молодой')).toBeInTheDocument(); expect(screen.getByText('Мёд гречишный')).toBeInTheDocument(); });
 test('shows loading state while response is delayed', async () => { server.use(http.get('*/api/products', async () => { await delay(250); return HttpResponse.json([]); })); renderWithProviders(<App />); expect(screen.getByText('Загрузка...')).toBeInTheDocument(); });
 test('shows empty catalog state', async () => { server.use(http.get('*/api/products', () => HttpResponse.json([]))); renderWithProviders(<App />); expect(await screen.findByText('Товаров пока нет')).toBeInTheDocument(); });
 test('shows error state if API fails', async () => { server.use(http.get('*/api/products', () => HttpResponse.json({error:'Internal'}, {status:500}))); renderWithProviders(<App />); expect(await screen.findByText(/Не удалось загрузить товары/)).toBeInTheDocument(); });
});
