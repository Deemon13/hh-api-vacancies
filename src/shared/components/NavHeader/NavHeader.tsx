import { useTypedDispatch } from "../../../app/redux/hooks/redux";
import { selectArea } from "../../../app/redux/reducers/vacanciesSlice";
import { ActiveHeaderLink } from "../../../shared";
import AboutLinkIcon from "../../../app/assets/nav-menu/user-circle.svg?react";

import styles from "./NavHeader.module.css";

export const NavHeader = () => {
  const dispatch = useTypedDispatch();

  return (
    <nav className={styles["nav-menu"]}>
      <ul className={styles["nav-menu__list"]}>
        <li className={styles["nav-menu__item"]}>
          <ActiveHeaderLink
            to="/vacancies/moscow"
            onClick={() => dispatch(selectArea("Москва"))}
          >
            Вакансии FE
          </ActiveHeaderLink>
        </li>
        <li className={styles["nav-menu__item"]}>
          <ActiveHeaderLink to="/about">
            <AboutLinkIcon className={styles["nav-menu__icon"]} />
            Обо мне
          </ActiveHeaderLink>
        </li>
      </ul>
    </nav>
  );
};
