import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  logo?: string;
  showLoginSection?: boolean;
  notifications?: string;
  avatar?: string;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
  logo,
  showLoginSection,
  notifications,
  avatar,
}) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
        <div className={styles.navLinks}>
          <a className={styles.home}>Home</a>
          <a className={styles.stays}>Stays</a>
          <a className={styles.becomeAHost}>Become a host</a>
        </div>
        {showLoginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src={avatar}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
