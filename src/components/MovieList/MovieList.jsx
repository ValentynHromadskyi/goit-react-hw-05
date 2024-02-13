import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {items.map(({ id, title, backdrop_path }) => (
          <li key={id} className={css.li}>
            <Link
              className={css.lin}
              to={`/movie/${id}`}
              state={location}
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
