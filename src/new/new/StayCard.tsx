import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  className?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  propBackgroundImage,
  brightwoodsEstate,
  bridlepathOntarioCanada,
}) => {
  const stayFavoritesStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.staycard, className].join(" ")}>
      <div className={styles.stayFavorites} style={stayFavoritesStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
      </div>
      <div className={styles.stayDetails}>
        <div className={styles.stayInfo}>
          <div className={styles.stayLocation}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayRatings}>
            <div className={styles.brightwoodsEstate}>4.8</div>
            <img
              className={styles.stayRatingIcons}
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.stayPricing}>
          <div className={styles.stayPriceInfo}>
            <div className={styles.brightwoodsEstate}>$502</div>
            <div className={styles.bridlepathOntarioCanada}>/night</div>
          </div>
          <img
            className={styles.stayPriceTrends}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className={styles.stayGuestInfo}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src="/user.svg"
            />
            <div className={styles.guests}>2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
