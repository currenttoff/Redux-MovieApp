import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import "./Home.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";
//import { addMovies } from "../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing></MovieListing>
    </div>
  );
}

export default Home;
