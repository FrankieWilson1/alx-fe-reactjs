import axios from "axios";

const GITHUB_URL = 'https://api.github.com';

/**
 * searches for GitHub users based on a query.
 * @param {string} username - The name to search for.
 * 
 * @returns {Promise<Object>} A promise that resolves
 *  to the API response containing user data
 */
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from GitHub: ", error);
        throw error;
    }

};
