import { FunctionComponent } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  className?: string;
  highlightIcons?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithWi?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  className = "",
  highlightIcons,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithWi,
}) => {
  return (
    <div className={[styles.detailscard, className].join(" ")}>
      <img
        className={styles.highlightIcons}
        loading="lazy"
        alt=""
        src={highlightIcons}
      />
      <div className={styles.highlightContent}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithWi}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
