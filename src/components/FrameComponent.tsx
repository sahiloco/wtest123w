import { FunctionComponent } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.reviewSectionWrapper, className].join(" ")}>
      <div className={styles.reviewSection}>
        <div className={styles.reviewsHeader}>
          <h3 className={styles.reviews}>Reviews</h3>
          <div className={styles.button}>View all</div>
        </div>
        <div className={styles.reviewCards}>
          <ReviewCard
            reviewerAvatars="/ellipse-12@2x.png"
            johnnyCash="Johnny Cash"
            june2023="June 2023"
            reviewRatings="5.0"
            michellesPlaceWasSoGreatAnd="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
          />
          <ReviewCard
            reviewerAvatars="/ellipse-12-1@2x.png"
            johnnyCash="Yuta Watanabe"
            june2023="May 2023"
            propDisplay="unset"
            propMinWidth="unset"
            reviewRatings="4.5"
            michellesPlaceWasSoGreatAnd="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          />
          <ReviewCard
            reviewerAvatars="/ellipse-12-2@2x.png"
            johnnyCash="Shane Willis"
            june2023="December 2022"
            propDisplay="inline-block"
            propMinWidth="105px"
            reviewRatings="4.8"
            michellesPlaceWasSoGreatAnd="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
