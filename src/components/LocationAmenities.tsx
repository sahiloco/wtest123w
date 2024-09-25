import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./LocationAmenities.module.css";

export type LocationAmenitiesType = {
  className?: string;
};

const LocationAmenities: FunctionComponent<LocationAmenitiesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.locationAmenities, className].join(" ")}>
      <div className={styles.amenitiesContainer}>
        <h3 className={styles.amenities}>Amenities</h3>
        <div className={styles.amenitiesList}>
          <div className={styles.amenitiesGrid}>
            <div className={styles.amenitiessection1}>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.mdilakeIcon}
                  loading="lazy"
                  alt=""
                  src="/mdilake.svg"
                />
                <div className={styles.lakeside}>Lakeside</div>
              </div>
              <div className={styles.iconSetTwo}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  alt=""
                  src="/tablertoolskitchen2.svg"
                />
                <div className={styles.kitchen}>Kitchen</div>
              </div>
              <div className={styles.iconSetFour}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsnestcamiqoutdooroutline.svg"
                />
                <div className={styles.securityCamerasOn}>
                  Security cameras on property
                </div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/ionwifi.svg"
                />
                <div className={styles.wifi}>Wifi</div>
              </div>
            </div>
            <div className={styles.amenitiessection2}>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  alt=""
                  src="/phcar.svg"
                />
                <div className={styles.securityCamerasOn}>Free parking</div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  alt=""
                  src="/cilshower.svg"
                />
                <div className={styles.securityCamerasOn}>Outdoor shower</div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolswatervocoutlinerounded.svg"
                />
                <div className={styles.securityCamerasOn}>Hot water</div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/covidpersonalhygienehandliquidsoap.svg"
                />
                <div className={styles.securityCamerasOn}>Shampoo</div>
              </div>
            </div>
            <div className={styles.amenitiessection3}>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  alt=""
                  src="/phfireextinguisher.svg"
                />
                <div className={styles.securityCamerasOn}>
                  Fire Extinguisher
                </div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  alt=""
                  src="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
                />
                <div className={styles.freezer}>Freezer</div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscoffeemakeroutline.svg"
                />
                <div className={styles.coffeeMaker}>Coffee Maker</div>
              </div>
              <div className={styles.amenityIcons}>
                <img
                  className={styles.tablertoolsKitchen2Icon}
                  loading="lazy"
                  alt=""
                  src="/mdistove.svg"
                />
                <div className={styles.glassStove}>Glass stove</div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.locationContainer}>
          <div className={styles.locationInfo}>
            <div className={styles.locationDetails}>
              <h3 className={styles.whereYoullBe}>Where you’ll be</h3>
              <div className={styles.locationName}>
                <img
                  className={styles.locationIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <div className={styles.securityCamerasOn}>The Bridle Path</div>
              </div>
            </div>
            <div className={styles.weather}>
              <div className={styles.weatherInfo}>
                <img
                  className={styles.suncloudIcon}
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className={styles.weatherInfo1}>
                  <div className={styles.temperature}>20°C</div>
                  <div className={styles.weatherDetail}>Broken clouds</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Sun</div>
                  <div className={styles.c}>27 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>22°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Mon</div>
                  <div className={styles.c}>28 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Tue</div>
                  <div className={styles.c}>29 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>20°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Wed</div>
                  <div className={styles.c}>30 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>19°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Thu</div>
                  <div className={styles.c}>31 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun.svg" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>24°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Fri</div>
                  <div className={styles.c}>1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.mapIcon} alt="" src="/map1@2x.png" />
          <img
            className={styles.mapContainerIcon}
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
