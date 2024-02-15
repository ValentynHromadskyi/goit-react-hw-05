import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilmsCast } from "../api";
import css from "./Cast.module.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);

  const defImg =
    "https://shop.vsimosvita.com/wp-content/uploads/2024/02/default-image.jpg";

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      try {
        setLoading(true);
        const fetched = await getFilmsCast(id);
        setCasts(fetched.cast);
      } catch (error) {
        toast.error("Oops, there was an error, please try reloading!");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {!casts.length && <p>We do not have any casts for this movie</p>}
      {casts.length > 0 && (
        <>
          <p className={css.title}>MOVIE CAST</p>
          <ul className={css.list}>
            {casts.map((cast) => (
              <li key={cast.id}>
                <img
                  className={css.img}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : defImg
                  }
                  width={200}
                />

                <div className={css.discription}>
                  <p className={css.name}>{cast.name}</p>
                  <p>character: {cast.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <Toaster position="top-center" />
    </div>
  );
}

export default Cast;
