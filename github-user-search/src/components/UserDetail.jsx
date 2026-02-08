import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/githubService';

const UserDetail = () => {
    const { login } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await fetchUserData(login);
                setUser(data);
            } catch (error) {
                console.error("Failed to load profile", error);
            } finally {
                setLoading(false);
            }

        };
        getProfile();
    }, [login]);

    if (loading) return <div className="text-center mt-20 text-xl">Loading Profile...</div>;
    if (!user) return <div className="text-center mt-20 text-red-500">User not found.</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Link to="/" className="text-blue-500 hover:underline mb-6 block">← Back to Search</Link>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                <div className="md:flex-shrink-0 bg-gray-100 flex items-center justify-center p-8">
                    <img className="h-48 w-48 rounded-full border-4 border-white shadow-lg" src={user.avatar_url} alt={user.login} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.type}</div>
                    <h1 className="block mt-1 text-3xl leading-tight font-bold text-black">{user.name || user.login}</h1>
                    <p className="mt-2 text-gray-500 italic">@{user.login}</p>
                    <p className="mt-4 text-gray-700">{user.bio || "No bio available for this user."}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                        <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-2xl font-bold text-blue-600">{user.public_repos}</p>
                            <p className="text-xs text-blue-400 uppercase">Repositories</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="text-2xl font-bold text-purple-600">{user.followers}</p>
                            <p className="text-xs text-purple-400 uppercase">Followers</p>
                        </div>
                    </div>

                    <a href={user.html_url} target="_blank" rel="noreferrer"
                        className="mt-8 block w-full text-center bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition">
                        Visit GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;