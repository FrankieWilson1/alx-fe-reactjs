import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import UserDetail from "./components/UserDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            GitHub User Search
          </h1>
          <p className="mt-4 text-gray-700">
            Ready to find some developers?
          </p>
        </header>

        <main className="w-full">
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/user/:login' element={<UserDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
