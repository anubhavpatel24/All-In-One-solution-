const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  if (!response.ok) {
    const fallback = 'Request failed';
    let message = fallback;
    try {
      const data = await response.json();
      message = data.message || fallback;
    } catch {
      message = fallback;
    }
    throw new Error(message);
  }
  return response.json();
}

export default API_BASE_URL;
