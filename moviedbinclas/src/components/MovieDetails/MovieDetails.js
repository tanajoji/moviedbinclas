import "./MovieDetails.css";

import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../utils/Hooks/useFetch";

const MovieDetails = () => {
  const { id } = useParams()
  const {isLoading, error, data:movie} = useFetch(`&i=${id}`)

  if(isLoading){
    return <div className="loading"></div>
  }
  if(error.show){
    return(
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    )
  }
  return (
    <section className="single-movie">
      <h1>Movie Details</h1>
    </section>
  );
};

export default MovieDetails;
