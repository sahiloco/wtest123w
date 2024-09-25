import { FunctionComponent } from "react";
import styles from "./Icontrend.module.css";

export type IcontrendType = {
  className?: string;
};

const Icontrend: FunctionComponent<IcontrendType> = ({ className = "" }) => {
  return (
    <div className={[styles.icontrend, className].join(" ")}>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.availabilityBackground} />
      </div>
    </div>
  );
};

export default Icontrend;
