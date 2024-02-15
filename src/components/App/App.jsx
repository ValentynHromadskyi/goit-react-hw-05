import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../Pages/HomePage"));
const Movies = lazy(() => import("../../Pages/Movies"));
const Movie = lazy(() => import("../../Pages/Movie"));
const NotFoundPage = lazy(() => import("../../Pages/NotFoundPage"));
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
