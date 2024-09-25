import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  className?: string;
  reviewerAvatars?: string;
  johnnyCash?: string;
  june2023?: string;
  reviewRatings?: string;
  michellesPlaceWasSoGreatAnd?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  className = "",
  reviewerAvatars,
  johnnyCash,
  june2023,
  propDisplay,
  propMinWidth,
  reviewRatings,
  michellesPlaceWasSoGreatAnd,
}) => {
  const june2023Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.reviewcard, className].join(" ")}>
      <div className={styles.reviewCardContent}>
        <div className={styles.reviewerInfo}>
          <img
            className={styles.reviewerAvatarsIcon}
            loading="lazy"
            alt=""
            src={reviewerAvatars}
          />
          <div className={styles.reviewerNamesDates}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023} style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className={styles.reviewRatingsParent}>
          <div className={styles.reviewRatings}>{reviewRatings}</div>
          <img
            className={styles.reviewSuperhostIcons}
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatAnd}
      </div>
    </div>
  );
};

export default ReviewCard;
