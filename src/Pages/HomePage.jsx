import { useState, useEffect } from "react";
import { getTrendingFilms } from "../components/api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const fetchedTrendings = await getTrendingFilms({
          abortController: controller,
        });
        setTrending(fetchedTrendings);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          toast.error("Oops, there was an error, please try reloading!");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <h1>Trending Today</h1>
      <MovieList items={trending} />
      <Toaster position="top-center" />
    </div>
  );
}
