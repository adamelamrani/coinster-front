import type { AppProps } from "next/app";
import React, { FC } from "react";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../redux/store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={"colored"}
    />
  </Layout>
);

export default wrapper.withRedux(WrappedApp);
