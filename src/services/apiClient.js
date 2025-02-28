const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_DEVELOPMENT
    : import.meta.env.VITE_API_URL_PRODUCTION;

//console.log("BASE_URL:", BASE_URL);


export const apiClient = async (endpoint, method = "GET", body = null) => {
  
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    if (response.status === 204) return null;

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
