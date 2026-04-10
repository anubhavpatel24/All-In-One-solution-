import { apiRequest } from './api';

export const bookingService = {
  getAll: (token) =>
    apiRequest('/bookings', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  create: (payload) =>
    apiRequest('/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  remove: (id, token) =>
    apiRequest(`/bookings/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),
};
