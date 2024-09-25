import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propMargin2?: CSSProperties["margin"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  propMargin,
  propMargin1,
  propTextDecoration,
  propMargin2,
}) => {
  const supportStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
      textDecoration: propTextDecoration,
    };
  }, [propMargin1, propTextDecoration]);

  const localhostStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerInner}>
        <div className={styles.footerContentWrapper}>
          <div className={styles.footerContent}>
            <div className={styles.supportParent}>
              <h3 className={styles.support} style={supportStyle}>
                Support
              </h3>
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.helpCentre}>AirCover</div>
              <div className={styles.helpCentre}>Combating discrimination</div>
              <div className={styles.helpCentre}>
                Supporting people with disabilities
              </div>
              <div className={styles.helpCentre}>Cencellation options</div>
              <div className={styles.helpCentre}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.supportParent}>
              <h3 className={styles.hosting} style={hostingStyle}>
                Hosting
              </h3>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.helpCentre}>Cover for hosts</div>
              <div className={styles.helpCentre}>Hosting resources</div>
              <div className={styles.helpCentre}>Community forum</div>
              <div className={styles.helpCentre}>Hosting responsibly</div>
            </div>
            <div className={styles.supportParent}>
              <h3 className={styles.localhost} style={localhostStyle}>
                Localhost
              </h3>
              <div className={styles.newsroom}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <div className={styles.helpCentre}>Careers</div>
              <div className={styles.investres}>Investres</div>
              <div className={styles.giftCards}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerChild}>
        <div className={styles.frameWrapper}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.localhostIncAll}>Privacy Policy</div>
              <div
                className={styles.localhostIncAll}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
