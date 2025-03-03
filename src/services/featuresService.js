import { apiClient } from './apiClient';

export const getFeatures = async () => {
  return apiClient('/api/features');
};

export const createFeatures = async (newFeatures) => {
  return apiClient('/productos/registrar', 'POST', newFeatures);
};

export const updateFeatures = (id, updateFeatures) =>
  apiClient(`/api/features/${id}`, 'PUT', updateFeatures);

export const getFeaturesById = (id) => apiClient(`/api/features${id}`);

export const deleteFeatures = (id) =>
  apiClient(`/api/features/${id}`, 'DELETE');
