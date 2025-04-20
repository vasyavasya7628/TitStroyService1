import axios from 'axios';

const API_BASE_URL = 'https://images.unsplash.com/'

const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID pEP9fnX0zGjL5963w5bXWGD7MSsik4uwwrC_i-KIMK4'
    },
});

function api() {
  async function getImage(id, width, height) {
    try {
      const imageUrl = `${API_BASE_URL}${id}?w=${width}&h=${height}`;
      return imageUrl;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }
  
  return {
    getImage
  };
}

export default api;