"use client";

import React, { useState } from 'react';

const NavSearch = () => {
    const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Add your search logic here
    console.log('Searching for:', search);
  };

  return (
    <div className='flex items-center rounded-lg w-full sm:w-6/12'>
        <div className='w-full border-2 border-[#e5e7eb]'>
            <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none " placeholder="검색어 입력" x-model="검색어 입력" />
        </div>
        <div>
            <button
                type="submit"
                className={`flex items-center bg-blue-500 justify-center w-9 h-9 text-white rounded-r-lg ${
                search.length > 0 ? 'bg-purple-500' : 'bg-gray-500 cursor-not-allowed'
                }`}
                disabled={search.length === 0}
                onClick={handleSearch}
            >
                <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
            </button>
        </div>
    </div>
  );
}

export default NavSearch;