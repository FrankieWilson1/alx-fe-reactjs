import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await fetchUserData(search);
            setUserData(data.items);
        } catch (error) {
            console.error("Search failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter username..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}

            <div className="mt-4">
                {userData.map(user => (
                    <div className="border-b py-2">
                        <img src={user.avatar_url} alt={user.login} className="w-10 rounded-full inline mr-2" />
                        <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;