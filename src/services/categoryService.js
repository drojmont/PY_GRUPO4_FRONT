import { apiClient } from './apiClient';

export const getCategories = async () => {
  return apiClient('/categorias');
};

export const createCategory = async (newProduct) => {
  return apiClient('/categorias/registrar', 'POST', newProduct);
};


export const getCategoryById = (id) => apiClient(`/categorias/${id}`);