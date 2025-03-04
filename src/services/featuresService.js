import { apiClient } from './apiClient';

export const getFeatures = async () => {
  return apiClient('/api/features');
};

export const createFeatures = async (newFeatures) => {
  return apiClient('/api/features', 'POST', newFeatures);
};

export const updateFeatures = (id, updateFeatures) =>
  apiClient(`/api/features/${id}`, 'PUT', updateFeatures);

export const getFeaturesById = (id) => apiClient(`/api/features/${id}`);

export const deleteFeatures = async (eventId) => {
  const response = await fetch(`http://localhost:8080/api/features/${eventId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar la característica: ${response.statusText}`);
  }

  return response.text();
};
