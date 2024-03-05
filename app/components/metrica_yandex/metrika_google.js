import Document, { Html, Head, Main, NextScript } from 'next/document';

class MetrikaGoogle extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SCSRQ2BJFJ"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SCSRQ2BJFJ');
              ,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MetrikaGoogle;