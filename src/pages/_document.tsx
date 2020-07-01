/* istanbul ignore file */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import redirectUserLogged, {
  redirectUserNotLogged,
} from "./redirectUserLogged";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    let token = redirectUserLogged(ctx);
    redirectUserNotLogged(ctx);

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      token,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Title</title>

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <meta name="author" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
