import css from "./SearchBar.module.css";

export function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSearch}>
        <input
          className={css.input}
          name="query"
          type="text"
          placeholder="Search movies"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
