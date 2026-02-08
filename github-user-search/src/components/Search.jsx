import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { Link } from 'react-router-dom';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        if (!username.trim()) {
            setUserData([]);
            return;
        }

        // A timer that waits 500ms
        const delayDebounce = setTimeout(async () => {
            setLoading(true);
            try {
                const items = await fetchUserData(username, location, minRepos, page);
                setUserData(prev => (page === 1 ? items : [...prev, ...items]));
                setTotalCount(items.totalCount);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }, 500);

        // Clears the timer if the user types another letter before 500ms are up
        return () => clearTimeout(delayDebounce);
    }, [username, location, minRepos, page]);

    return (
        <div className="search-container p-4">
            <form className='bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto'>
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        className="flex-1 border p-2 rounded"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        className="flex-1 border p-2 rounded"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <input
                        type="number"
                        className="flex-1 border p-2 rounded"
                        placeholder="Min Repos"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white p-2 ml-2" type='submit'>Search</button>
                </div>

            </form>

            {loading && <p className='text-center mt-4 text-blue-500'>Loading....</p>}

            {error && <p className='text-center mt-4 text-red-500'>Looks like we cant find the user</p>}

            <div className="results-list grid gap-4 mt-8">
                {userData.map((user) => (
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow sm:p-6" key={user.id}>
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                        <div className="ml-4 flex-1">
                            <h3 className="text-lg font-bold">{user.login}</h3>
                            <p className="text-sm text-gray-600">Type: {user.type}</p>
                            <a href={user.html_url} target='_blank' rel='noreferrer' className="text-blue-500 hover:underline">GitHub</a>
                            <Link
                                to={`/user/${user.login}`}
                                className='text-blue-500 hover:text-blue-700 font-medium'
                            > View Full Profile
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;