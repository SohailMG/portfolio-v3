import "../styles/globals.css";
import type { AppProps } from "next/app";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
const progress = new ProgressBar({
  size: 6,
  color: "#64FFDA",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.error);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
