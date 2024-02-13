import css from "./PageMovie.module.css";

function PageMovie(data) {
  const defImg =
    "https://shop.vsimosvita.com/wp-content/uploads/2024/02/default-image.jpg";
  return (
    <div className={css.movie}>
      <img
        src={
          data.data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.data.poster_path}`
            : defImg
        }
        width={300}
        height={300}
      />

      <div className={css.description}>
        <p className={css.title}>{data.data.original_title}</p>
        <span className={css.span}>Overview:</span>
        <p>{data.data.overview}</p>
        <span className={css.span}> Genres:</span>
        <p>{data.data.genres.map((item) => item.name).join(", ")}</p>
      </div>
    </div>
  );
}
export default PageMovie;
