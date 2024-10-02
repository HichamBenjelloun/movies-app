import { fetchPopularMovies } from '@/app/actions/movies';
import MovieCard from '@/app/components/movie-card/movie-card';

export default async function Page() {
  const movies = await fetchPopularMovies();

  return (
    <div className="p-8">
      <h1 className="text-2xl">Popular movies</h1>
      <div className="flex flex-wrap gap-4 w-full h-full p-8">
        {movies.results?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
