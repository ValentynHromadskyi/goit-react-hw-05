import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getFilmsId } from "../components/api";
import { NavLink, Outlet } from "react-router-dom";
import PageMovie from "../components/PageMovie/PageMovie";
import { Back } from "../components/Back/Back";
import css from "./Movie.module.css";
import Loader from "../components/App/Loader/Loader";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function Movie() {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const back = useRef(location.state);

  useEffect(() => {
    const controller = new AbortController();
    if (!id) return;

    async function fetchData() {
      try {
        setLoading(true);

        const fetchedData = await getFilmsId(id);
        setDataMovie(fetchedData);
      } catch (error) {
        toast.error("Oops, there was an error, please try reloading!");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      <Back href={back.current ?? "/"}>Go Back</Back>
      {dataMovie && <PageMovie data={dataMovie} />}

      <ul className={css.list}>
        Additional information :
        <li>
          <NavLink className={css.link} to="cast">
            Movie cast
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="reviews">
            Movie reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <Toaster position="top-center" />
    </div>
  );
}
export default Movie;
