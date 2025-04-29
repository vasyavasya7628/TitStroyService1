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

    async function getPromise() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_PROMISE_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async function getTeam() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_TEAM_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async function getImage(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/media/${id}/`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async function getCertificates() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_CERTIFICATES_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async function getAdvantages() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_ADVANTAGES_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
    async function getVacancys() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_VACANSYS_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async function getProjects() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_PROJECTS_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    
    async function getReviews() {
        try {
            const response = await fetch(`${API_BASE_URL}/pages/pages/${process.env.NEXT_PUBLIC_REVIEWS_ID}/`);
            const data = await response.json();
            return data.blocks;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    return {
        getUrlHeader,
        getPromise,
        getTeam,
        getImage,
        getCertificates,
        getAdvantages,
        getVacancys,
        getProjects,
        getReviews
    }
}

export default api;