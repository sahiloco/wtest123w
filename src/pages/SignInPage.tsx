import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import SocialLoginContainer from "../components/SocialLoginContainer";
import { useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.signInPage}>
      <Header
        logo="/logo.svg"
        showLoginSection={false}
        notifications="/notifications@2x.png"
        avatar="/newww/avatar@2x.png"
      />
      <main className={styles.loginSections}>
        <div className={styles.loginFormContainer}>
          <div className={styles.form}>
            <div className={styles.formText}>
              <h2 className={styles.signIn}>Sign in</h2>
            </div>
            <div className={styles.credentialsContainer}>
              <div className={styles.formText}>
                <form className={styles.form2}>
                  <div className={styles.formFields}>
                    <TextField
                      className={styles.email}
                      placeholder="Email address"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.8px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className={styles.email}
                      placeholder="Password"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.8px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
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
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign in
                  </Button>
                </form>
              </div>
              <div className={styles.divider} />
              <SocialLoginContainer
                orSignUpWith="Or sign in with"
                googleIcon="/google-icon@2x.png"
                facebookIcon="/facebook-icon@2x.png"
                appleIcon="/newww/apple-icon@2x.png"
              />
              <div
                className={styles.dontHaveAnContainer}
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className={styles.signUp}>Sign up</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInformation}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.localhostIncAll}>Privacy Policy</div>
              <div
                className={styles.localhostIncAll}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
