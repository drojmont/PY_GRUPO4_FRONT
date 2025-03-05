import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
apiClient.interceptors.request.use((config) => {
  console.log('API Request:', {
    url: config.url,
    method: config.method,
    headers: config.headers,
  });
  return config;
});

// Add response interceptor for logging
apiClient.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      data: response.data,
      status: response.status,
    });
    return response;
  },
  (error) => {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    return Promise.reject(error);
  }
);

export const fetchUsers = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userGoTrip'));

    if (!token) {
      throw new Error('No authentication token found');
    }

        const response = await apiClient.get('/user/listar', {
      headers: {
        Authorization: `Bearer ${token.trim()}`,
      },
    });

    // Validate response structure
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid response format: Expected an array of users');
    }

    // Log raw user data for debugging
    console.log('Fetched Users:', response.data);

    return response.data.map((user) => ({
      id: user.id,
      username: user.nombre || 'Usuario sin nombre',
      email: user.correoElectronico || 'Email no disponible',
      role: user.role || 'CLIENT',
      avatar: user.avatar || '/default-avatar.png',
    }));
  } catch (error) {
    console.error('Detailed error fetching users:', {
      message: error.response?.data || error.message,
      status: error.response?.status,
    });

    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    throw error;
  }
};

export const updateUserRole = async (userId, isAdmin) => {
  try {
    const response = await apiClient.post(`/user/${userId}/role`, { isAdmin });
    return response.data;
  } catch (error) {
    console.error('Error updating user role:', {
      message: error.response?.data || error.message,
      status: error.response?.status,
    });
    throw error;
  }
};
