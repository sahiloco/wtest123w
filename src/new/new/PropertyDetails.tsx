import { FunctionComponent } from "react";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import ListingDescription from "../../components/ListingDescription";
import LocationAmenities from "../../components/LocationAmenities";
import FrameComponent from "../../components/FrameComponent";
import FrameComponent1 from "../../components/FrameComponent1";
import Footer from "../../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        logo="/logo.svg"
        showLoginSection
        notifications="/notifications@2x.png"
        avatar="/newww/avatar@2x.png"
      />
      <PageContent />
      <section className={styles.listingOverview}>
        <div className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </div>
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <Footer
        propMargin="unset"
        propMargin1="unset"
        propTextDecoration="none"
        propMargin2="unset"
      />
    </div>
  );
};

export default PropertyDetails;
