import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicon from '../images/favicon.png';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="en">
          <Head>
            <link rel="icon" type="image/png" href={favicon} />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
