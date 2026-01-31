import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUser(null);

        try {
            const data = await fetchUserData(username);
            setUser(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container p-4">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    className="border p-2"
                    placeholder="Search GitHub User"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2 ml-2" type='submit'>Search</button>
            </form>

            {loading && <p>Loading....</p>}

            {error && <p>Looks like we cant find the user</p>}

            {
                user && (
                    <div className="user-info mt-4">
                        <img src={user.avatar_url} alt={user.login} width='100' />
                        <h2>{user.name || user.login}</h2>
                        <p>{user.bio}</p>
                        <a href={user.html_url} target='_blank' rel='noreferrer'>View GitHub Profile</a>
                    </div>
                )
            }
        </div>
    );
};

export default Search;