import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilmsCast } from "../api";
import css from "./Cast.module.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const defImg =
  "https://media.istockphoto.com/id/1409329028/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BD%D0%B5%D0%BC%D0%B0%D1%94-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%BD%D1%8E%D0%B2%D0%B0%D1%87%D0%B0-%D0%B5%D1%81%D0%BA%D1%96%D0%B7-%D0%B5%D1%81%D0%BA%D1%96%D0%B7%D1%83-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.jpg?s=612x612&w=0&k=20&c=7lf1qdKMz5OILa06QwBBmbr6X-FmDOk-_IzQv_I1Tnw=";

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);

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
