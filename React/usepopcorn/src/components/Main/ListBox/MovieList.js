import Movie from "./Movie";

export default function MovieList({ movies, onSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {movies.map(movie => (
        <Movie movie={movie} key={movie.imdbID} onSelectedMovie={onSelectedMovie} />
      ))}
    </ul>
  );
}