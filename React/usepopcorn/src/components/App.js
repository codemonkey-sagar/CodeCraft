import { useState, useEffect } from "react";

import Box from "./Global/Box";
import Loader from "./Global/Loader";
import ErrorMessage from "./Global/ErrorMessage";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Search from "./Navbar/Search";
import NumResults from "./Navbar/NumResults";
import MovieList from "./Main/ListBox/MovieList";
import WatchedSummary from "./Main/WatchBox/WatchedSummary";
import WatchedMoviesList from "./Main/WatchBox/WatchedMoviesList";
import MovieDetails from "./Main/WatchBox/MovieDetails";
import { useMovies } from "./CustomHooks/useMovies";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Custom Hook
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectedMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddWatched} watched={watched} /> :
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>}
        </Box>
      </Main>
    </>
  );
}
