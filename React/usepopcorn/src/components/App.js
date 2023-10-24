import { useState } from "react";
import { tempMovieData } from "../data";
import { tempWatchedData } from "../data";

import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Box from "./Global/Box"
import Search from "./Navbar/Search";
import NumResults from "./Navbar/NumResults";
import MovieList from "./Main/ListBox/MovieList";
import WatchedSummary from "./Main/WatchBox/WatchedSummary";
import WatchedMoviesList from "./Main/WatchBox/WatchedMoviesList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  )
}