import { SearchBar } from "../components/SearchBar/SearchBar";
import { getFilms } from "../components/api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/App/Loader/Loader";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function Movies() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const search = params.get("query") ?? "";

  const handleSubmit = (value) => {
    setParams({ query: value });
  };

  useEffect(() => {
    const controller = new AbortController();

    if (!search) {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        const fetchedTrending = await getFilms({
          search,
          abortController: controller,
        });

        setMovie(fetchedTrending);
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
  }, [search]);

  return (
    <div>
      {loading && <Loader />}
      <SearchBar onSearch={handleSubmit} />
      {search.length > 0 && <MovieList items={movie} />}
      <Toaster position="top-center" />
    </div>
  );
}

export default Movies;
