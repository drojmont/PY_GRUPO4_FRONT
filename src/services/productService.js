import { apiClient } from './apiClient';

export const getProducts = async () => {
  return apiClient('/productos/listar');
};

export const createProduct = async (newProduct) => {
  return apiClient('/productos/registrar', 'POST', newProduct);
};

export const updateProduct = (id, updatedProduct) =>
  apiClient(`/productos/actualizar/${id}`, 'PUT', updatedProduct);

export const getProductById = (id) => apiClient(`/productos/${id}`);

export const deleteProduct = (id) =>
  apiClient(`/productos/eliminar/${id}`, 'DELETE');
