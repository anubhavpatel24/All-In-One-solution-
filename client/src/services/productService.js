import { apiRequest } from './api';

export const productService = {
  getAll: () => apiRequest('/products'),
  create: (payload, token) =>
    apiRequest('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(payload),
    }),
  update: (id, payload, token) =>
    apiRequest(`/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(payload),
    }),
  remove: (id, token) =>
    apiRequest(`/products/${id}`, {
      method: 'DELETE',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
};
