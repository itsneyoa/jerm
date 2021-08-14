import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
        <meta name="description" content="Jay perm is a very bald non" />
        <meta name="keywords" content="Jperm, Jperrm, Bald, Non" />
        <title>Jperm is a bald non</title>

        <link rel="manifest" href="/manifest.json" />

        {/* <link href="/icons/16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch.png" /> */}

        <meta name="theme-color" content="#f42069" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
