// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        
        <body>
          <Main />
          <NextScript />
          {/* Include a script to conditionally enable window */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window === 'undefined') {
                  window = {}
                }
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
