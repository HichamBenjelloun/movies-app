import { fetchMovies } from '@/app/actions/movies';
import MovieCard from '@/app/components/movie-card/movie-card';

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const movies = await fetchMovies(searchParams.search);

  return (
    <div className="p-8">
      <h1 className="text-2xl">Search results for "{searchParams.search}"</h1>
      <div className="flex flex-wrap gap-4 w-full h-full p-8">
        {movies.results?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
