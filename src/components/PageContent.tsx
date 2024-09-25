import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Icontrend from "./Icontrend";
import styles from "./PageContent.module.css";

export type PageContentType = {
  className?: string;
};

const PageContent: FunctionComponent<PageContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pageContent, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <img
            className={styles.mainContentIcon}
            loading="lazy"
            alt=""
            src="/frame-9@2x.png"
          />
          <div className={styles.mainContent1}>
            <img
              className={styles.imageGalleryIcon}
              loading="lazy"
              alt=""
              src="/frame-46@2x.png"
            />
            <img
              className={styles.imageGalleryIcon}
              loading="lazy"
              alt=""
              src="/frame-47@2x.png"
            />
            <img
              className={styles.imageGalleryIcon}
              loading="lazy"
              alt=""
              src="/frame-48@2x.png"
            />
            <img
              className={styles.imageGalleryIcon}
              loading="lazy"
              alt=""
              src="/frame-49@2x.png"
            />
            <div className={styles.imageGallery}>
              <img
                className={styles.imagePlaceholderIcon}
                alt=""
                src="/image-placeholder@2x.png"
              />
              <img
                className={styles.galleryIndicatorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.listingInfo}>
          <div className={styles.infoContainer}>
            <div className={styles.infoWrapper}>
              <div className={styles.listingHeaderParent}>
                <div className={styles.listingHeader}>
                  <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                  <div className={styles.bridlepathOntarioCanada}>
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/hearticon.svg"
                />
              </div>
              <div className={styles.ratingAvailability}>
                <div className={styles.rating}>
                  <div className={styles.ratingValue}>5.0</div>
                  <img
                    className={styles.ratingStarsIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.reviewCount}>
                  <div className={styles.reviews}>200 Reviews</div>
                </div>
              </div>
            </div>
            <div
              className={styles.welcomeToOur}
            >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
          </div>
          <div className={styles.bookingContainerParent}>
            <div className={styles.bookingContainer}>
              <div className={styles.nightlyPrice}>
                <b className={styles.price}>$658</b>
                <div className={styles.priceDetails}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
              <div className={styles.bookingTrend}>
                <div className={styles.trendDetails}>
                  <Icontrend />
                  <div className={styles.bookingRecommendation}>
                    <div className={styles.bestTimeTo}>Best time to Book</div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className={styles.searchFlightsButton}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
                height: 58,
              }}
            >
              Book this home
            </Button>
          </div>
          <div className={styles.host}>
            <div className={styles.bestTimeTo}>Hosted by:</div>
            <div className={styles.hostInfo}>
              <img
                className={styles.hostImageIcon}
                loading="lazy"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className={styles.hostName}>
                <div className={styles.michelleWard}>Michelle Ward</div>
                <div className={styles.joinedInMay}>Joined in May 2021</div>
              </div>
              <button className={styles.hostBadge}>
                <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
                <div className={styles.superhost}>Superhost</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
