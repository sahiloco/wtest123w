import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./asd.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <Header
        logo="/logo.svg"
        showLoginSection
        notifications="/notifications@2x.png"
        avatar="/newww/avatar@2x.png"
      />
      <HeroContainer />
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem
            onListingItemContainerClick={onListingItemContainerClick}
            listingImage="/listing-image@2x.png"
            listingTitle="Lakeside Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            propFlex="1"
            price="$410"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            propFlex="1"
            price="$325"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            propFlex="unset"
            price="$485"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            propFlex="unset"
            price="$502"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            propFlex="1"
            price="$655"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            propFlex="unset"
            price="$320"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            propFlex="1"
            price="$350"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            propFlex="1"
            price="$395"
            showBestTime={false}
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            propFlex="unset"
            price="$385"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            propFlex="unset"
            price="$385"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            propFlex="1"
            price="$385"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            propFlex="1"
            price="$385"
            showBestTime={false}
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            propFlex="unset"
            price="$385"
            showBestTime
            trendIcon="/trend-icon@2x.png"
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            propFlex="1"
            price="$385"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            propFlex="1"
            price="$385"
            showBestTime={false}
            trendIcon="/trend-icon-1.svg"
          />
        </section>
        <Button
          className={styles.showMoreButton}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
        >
          Show more
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
