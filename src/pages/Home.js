import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} id={movie.id} title={movie.title} />;
        })}
      </main>
    </>
  );
}

export default Home;
