import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Actor from "../components/Actor";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then(setActors);
  }, []);
  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => {
          return (
            <Actor key={actor.id} name={actor.name} movies={actor.movies} />
          );
        })}
      </main>
    </>
  );
}

export default Actors;
