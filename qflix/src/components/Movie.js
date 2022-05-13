import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.main}>
      <div className={styles.main2}>
        <div className={styles.img}>
          <img src={coverImg} alt={title} />
        </div>
        <div className={styles.TitleAndInfo}>
          <h2>
            <Link className={styles.link} to={`/movie/${id}`}>
              {title}
            </Link>
          </h2>
          <ul>{genres && genres.map((g) => <span key={g}>{g}</span>)}</ul>
        </div>
        <div className={styles.summary}>
          <p>
            {summary.length > 155 ? `${summary.slice(0, 155)} ...` : summary}
          </p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
