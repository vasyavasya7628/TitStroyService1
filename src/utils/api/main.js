import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


function api() {
    async function getUrlHeader() {
        try {
            const response = await fetch(`${API_BASE_URL}/menu/menus/${process.env.NEXT_PUBLIC_HEADER_ID}/`);
            const data = await response.json();
            return data.menu_items
        } catch (error) {
            console.error('Error fetching image:', error);
            throw error;
        }
    }

    return {
        getUrlHeader
    }
}

export default api;