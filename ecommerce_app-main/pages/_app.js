import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "../store/GlobalState";
import UserLayout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <UserLayout>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
        />
        <Component {...pageProps} />
      </UserLayout>
    </DataProvider>
  );
}

export default MyApp;
