import React from 'react';
import { render, screen, waitFor, fireEvent, act, within } from '@testing-library/react';
import App from './App';
import { getProducts, getCategories } from './utils/api';
import { mockProducts, mockCategories } from './mocks/mockData';

// Mock the API calls
jest.mock('./utils/api', () => ({
  getProducts: jest.fn(),
  getCategories: jest.fn(),
}));
beforeEach(() => {
    getProducts.mockResolvedValue(mockProducts);
    getCategories.mockResolvedValue(mockCategories);
  });

describe('App Component', () => {
  beforeEach(async () => {
    await act(async () => {
      getProducts.mockResolvedValue(mockProducts);
      getCategories.mockResolvedValue(mockCategories);
    });
  });

  test('renders loading state initially', async () => {
    render(<App />);
  
expect(screen.getByTestId('loader')).toBeInTheDocument();
 
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });
  

  test('renders product list after loading', async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText(/Fjallraven - Foldsack No. 1/i)).toBeInTheDocument();
    });

    mockProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  test('can filter products by category', async () => {
    render(<App />);
  
    // Wait for the select element to appear
    const select = await screen.findByRole('combobox');
  
    // Choose the first real category (not 'all')
    const testCategory = mockCategories[0];
  
    // Change the select value
    fireEvent.change(select, { target: { value: testCategory } });
  
    // Wait for DOM updates
    await waitFor(() => {
      const visibleProducts = mockProducts.filter(p => p.category === testCategory);
      const hiddenProducts = mockProducts.filter(p => p.category !== testCategory);
  
      visibleProducts.forEach(product => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
      });
  
      hiddenProducts.forEach(product => {
        expect(screen.queryByText(product.title)).not.toBeInTheDocument();
      });
    });
  });



  test('can add a product to the cart', async () => {
    await act(async () => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText(mockProducts[0].title)).toBeInTheDocument();
    });

    const addToCartButtons = screen.getAllByText(/add to cart/i);
    fireEvent.click(addToCartButtons[0]);

    fireEvent.click(screen.getByTestId('cart-button'));

const cart = screen.getByTestId('cart');
expect(within(cart).getByText(mockProducts[0].title)).toBeInTheDocument();

  });
});
