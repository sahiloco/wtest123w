import { FunctionComponent } from "react";
import StayCard from "./StayCard";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.similarStaysSectionWrapper, className].join(" ")}
    >
      <div className={styles.similarStaysSection}>
        <div className={styles.similarStaysHeader}>
          <h3 className={styles.similarStays}>Similar stays</h3>
          <div className={styles.button}>View all</div>
        </div>
        <div className={styles.stayCards}>
          <StayCard
            brightwoodsEstate="Missisuaga Aistream"
            bridlepathOntarioCanada="Missisauga, Ontario, Canada"
          />
          <StayCard
            propBackgroundImage="url('/frame-91@3x.png')"
            brightwoodsEstate="Urban Loft"
            bridlepathOntarioCanada="Urban Loft"
          />
          <StayCard
            propBackgroundImage="url('/frame-93@3x.png')"
            brightwoodsEstate="Forestville Cottages"
            bridlepathOntarioCanada="Simcoe, Ontario Canada"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
