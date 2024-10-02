'use server';

import { redirect } from 'next/navigation';
import path from 'node:path';
import {
  MovieResult,
  MovieResultsResponse,
  PopularMoviesResponse,
} from 'moviedb-promise';

async function queryMovieApi(pathname: string, searchParams: string) {
  const url =
    path.join(process.env.API_URL!, pathname) +
    (searchParams && `?${searchParams}`);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.JWT_SECRET}`,
    },
  });
  return response.json();
}

export async function fetchPopularMovies(): Promise<PopularMoviesResponse> {
  return queryMovieApi('/movie/popular', '');
}

export async function fetchMovies(
  searchQuery: string,
): Promise<MovieResultsResponse> {
  return queryMovieApi('/search/movie', `query=${searchQuery}`);
}

export async function fetchMovie(movieId: string): Promise<MovieResult> {
  return queryMovieApi(`/movie/${movieId}`, '');
}

export async function searchMovies(formData: FormData) {
  const searchQuery = formData.get('search');

  if (searchQuery) {
    redirect(`/search-movies?search=${searchQuery}`);
  }
}
