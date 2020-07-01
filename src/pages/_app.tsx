/* istanbul ignore file */
import React from "react";
import "./document.css";
import { withRedux } from "../lib/redux/withRedux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useRouter } from "next/router";
import redirectUserLogged, {
  redirectUserNotLogged,
} from "./redirectUserLogged";

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async function ({ Component, ctx }: any) {
  let token = redirectUserLogged(ctx);
  redirectUserNotLogged(ctx);

  return {
    token,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default withRedux(App);
