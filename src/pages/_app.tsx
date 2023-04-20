import { type AppType } from "next/dist/shared/lib/utils";
import Navbar from "~/components/Navbar";
import HomePage from "~/pages/HomePage";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
