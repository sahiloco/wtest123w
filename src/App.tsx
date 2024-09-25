import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/asd";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PropertyDetails from "./new/new/PropertyDetails";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-in-page" element={<SignInPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/property-details" element={<PropertyDetails />} />
    </Routes>
  );
}
export default App;
