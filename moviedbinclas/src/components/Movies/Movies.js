import React from "react";
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../utils/context"
import "./Movies.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const {movies, isLoading} = useGlobalContext()
  console.log(movies)

  if(isLoading) {
    return <div className="loading"></div>
  }
  return (
    <section className="movies">
      {movies && 
      movies.map((movie) => {          //we could destructure here itself too, but renaming wont be possible
        const {imdbID:id,Poster:poster,Title:title,Year:year} = movie //destructuring required fields from movie object
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title}/>
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
      <h3>Movies</h3>
    </section>
  );
};

export default Movies;
