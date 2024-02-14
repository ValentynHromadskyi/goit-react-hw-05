import css from "./SearchBar.module.css";
import { ImSearch } from "react-icons/im";

export function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(event.target[0].value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="query"
          type="text"
          placeholder="Search movies"
        />

        <button className={css.btn} type="submit">
          <ImSearch />
        </button>
      </form>
    </header>
  );
}
