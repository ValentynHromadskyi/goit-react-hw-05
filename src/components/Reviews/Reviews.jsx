import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilmsReviews } from "../api";
import css from "./Reviews.module.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetch() {
      try {
        setLoading(true);
        const fetcheData = await getFilmsReviews(id);
        setReviews(fetcheData.results);
      } catch (error) {
        toast.error("Oops, there was an error, please try reloading!");
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {!reviews.length && <p>We do not have any reviews for this movie</p>}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id}>
              <div>
                <p className={css.author}>{review.author}</p>
                <p className={css.review}>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Toaster position="top-center" />
    </div>
  );
}
export default Reviews;
