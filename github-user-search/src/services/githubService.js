import axios from "axios";

const GITHUB_URL = 'https://api.github.com';

/**
 * searches for GitHub users based on a query.
 * @param {string} username - The name to search for.
 * 
 * @returns {Promise<Object>} A promise that resolves
 *  to the API response containing user data
 */
export const fetchUserData = async (username, location, minRepos) => {
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    try {
        const response = await axios.get(`${GITHUB_URL}/search/users?q=${username}`);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching data from GitHub: ", error);
        throw error;
    }

};
