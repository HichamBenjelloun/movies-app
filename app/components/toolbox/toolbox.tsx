'use client';

import React from 'react';
import { searchMovies } from '@/app/actions/movies';
import Link from 'next/link';

export default function Toolbox() {
  return (
    <nav className="h-[4rem] bg-purple-900 flex justify-between rounded-b-3xl">
      <div className="flex items-center ">
        <div className="w-12 h-12 bg-white/15 ml-4 mr-4 rounded-[50%]">
          <span className="w-full h-full flex items-center justify-center text-xl">
            🎬
          </span>
        </div>
        <h1>Movies</h1>
        <form className="ml-8" action={searchMovies}>
          <label>
            <span className="sr-only">Search</span>
            <input
              name="search"
              className="rounded-3xl p-1 text-black"
              type="text"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      <div className="h-full flex items-center mr-4">
        <Link href="/popular-movies" className="hover:underline">
          Popular movies
        </Link>
      </div>
    </nav>
  );
}
