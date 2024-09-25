import { FunctionComponent } from "react";
import styles from "./SocialLoginContainer.module.css";

export type SocialLoginContainerType = {
  className?: string;
  orSignUpWith?: string;
  googleIcon?: string;
  facebookIcon?: string;
  appleIcon?: string;
};

const SocialLoginContainer: FunctionComponent<SocialLoginContainerType> = ({
  className = "",
  orSignUpWith,
  googleIcon,
  facebookIcon,
  appleIcon,
}) => {
  return (
    <div className={[styles.socialLoginContainer, className].join(" ")}>
      <div className={styles.orSignUp}>{orSignUpWith}</div>
      <div className={styles.socialLoginContainer1}>
        <div className={styles.socialLogin}>
          <img
            className={styles.googleIcon}
            loading="lazy"
            alt=""
            src={googleIcon}
          />
          <div className={styles.socialLoginLabels}>Google</div>
        </div>
        <div className={styles.socialLogin1}>
          <img
            className={styles.googleIcon}
            loading="lazy"
            alt=""
            src={facebookIcon}
          />
          <div className={styles.socialLoginLabels}>Facebook</div>
        </div>
        <div className={styles.socialLogin}>
          <img
            className={styles.googleIcon}
            loading="lazy"
            alt=""
            src={appleIcon}
          />
          <div className={styles.socialLoginLabels}>Apple</div>
        </div>
      </div>
    </div>
  );
};

export default SocialLoginContainer;
