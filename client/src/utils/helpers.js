export function formatPrice(value) {
  return `Rs. ${Number(value || 0).toLocaleString('en-IN')}`;
}

export function formatDate(value) {
  return new Date(value).toLocaleDateString('en-IN');
}

export function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}
