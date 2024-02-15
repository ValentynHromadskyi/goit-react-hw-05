import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ items }) => {
  const location = useLocation();
  const defImg =
    "https://media.istockphoto.com/id/1409329028/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%B5%D0%BC%D0%B0%D1%94-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%BD%D1%8E%D0%B2%D0%B0%D1%87%D0%B0-%D0%B5%D1%81%D0%BA%D1%96%D0%B7-%D0%B5%D1%81%D0%BA%D1%96%D0%B7%D1%83-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.jpg?s=612x612&w=0&k=20&c=7lf1qdKMz5OILa06QwBBmbr6X-FmDOk-_IzQv_I1Tnw=";
  return (
    <div>
      <ul className={css.list}>
        {items.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movie/${id}`} state={location}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defImg
                }
                alt={title}
                width={200}
                height={300}
                className={css.image}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
