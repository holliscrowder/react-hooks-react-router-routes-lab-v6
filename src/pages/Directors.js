import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Director from "../components/Director";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then(setDirectors);
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => {
          return (
            <Director
              key={director.id}
              name={director.name}
              movies={director.movies}
            />
          );
        })}
      </main>
    </>
  );
}

export default Directors;
