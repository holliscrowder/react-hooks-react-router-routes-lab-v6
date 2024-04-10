import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const { title, time, genres } = movie;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then(setMovie);
  }, [id]);

  if (!movie.id) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <NavBar />
        <h1>{title}</h1>
      </header>
      <main>
        <p>Time: {time}</p>
        {genres.map((genre) => {
          return <span key={genre}>{genre}</span>;
        })}
      </main>
    </>
  );
}

export default Movie;
