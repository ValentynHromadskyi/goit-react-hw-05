import { NavLink } from "react-router-dom";
import { SlActionUndo } from "react-icons/sl";
import css from "./Back.module.css";
export const Back = ({ href, children }) => {
  return (
    <NavLink className={css.btn} to={href} type="button">
      {<SlActionUndo />}
      {children}
    </NavLink>
  );
};
