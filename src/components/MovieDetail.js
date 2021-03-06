import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../features/movies/movieSlice";
import { getSelectedMovieOrShow } from "../features/movies/movieSlice";
import "./MovieDetail.scss";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    //cleanup function
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  console.log(data);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading </div>
      ) : (
        <Fragment>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                Imdb rating <i className="fa fa-star"></i>:{data.imdbRating}
              </span>
              <span>
                Imdb Votes <i className="fa fa-thumbs-up"></i>:{data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i>:{data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i>:{data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title}></img>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default MovieDetail;
