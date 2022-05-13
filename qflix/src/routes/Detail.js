import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./css/Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <span>QFLIX</span>
        <span>
          <Link to={`/`}>home</Link>
        </span>
      </div>
      {loading ? (
        <div className={styles.LoadingMain}>
          <div>
            <h1 className={styles.Loading}>"Loading..."</h1>
          </div>
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.main2}>
            <div className={styles.imgAndTitle}>
              <span className={styles.img}>
                <img src={details.medium_cover_image} />
              </span>
              <span className={styles.title}>{details.title}</span>
            </div>
            <div className={styles.info}>
              <span>{details.year}</span>
              <span>{details.rating}★</span>
              <span>{details.runtime}분</span>
              <span>
                {details.genres &&
                  details.genres.map((g) => <li key={g}>{g}</li>)}
              </span>
            </div>
            <div className={styles.summary}>
              <span>{details.description_intro}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
