import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./css/Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <span className={styles.qflix}>
          <Link style={{ textDecoration: "none", color: "red" }} to={`/`}>
            QFLIX
          </Link>
        </span>
        <span className={styles.home}>
          <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
            home
          </Link>
        </span>
      </div>
      {loading ? (
        <div className={styles.LoadingMain}>
          <h1>"Loading..."</h1>
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.main2}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
