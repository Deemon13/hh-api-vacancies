import { Link, useMatch } from "react-router-dom";

import styles from "./ActiveHeaderLink.module.css";

interface ActiveHeaderLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
}

export const ActiveHeaderLink = ({
  children,
  to,
  ...props
}: ActiveHeaderLinkProps) => {
  const match = useMatch(to);
  const matchVacancies = useMatch("/vacancies/*");

  const isActiveLink = match || (to === "/vacancies/moscow" && matchVacancies);

  return (
    <Link
      to={to}
      {...props}
      className={
        isActiveLink
          ? `${styles["active-header-link"]} ${styles["active-header-link--active"]}`
          : `${styles["active-header-link"]}`
      }
    >
      {children}
    </Link>
  );
};
