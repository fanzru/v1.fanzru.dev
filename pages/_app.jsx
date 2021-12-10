import 'tailwindcss/tailwind.css'
import '../style/global.css'
import '../style/tailwind.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Hello i'm Affan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta property="og:url" content="fanzru.dev" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
        <meta property="og:title" content={"Hallo"} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="A Software Engineer and Agile Enthusiast"
        />
        <meta property="og:image" content={"https://drive.google.com/file/d/14gjUIt5dU5KH55Kh9A-gQ1Iy41nBc93q/view?usp=sharing"} />
      </Head>
      <Component {...pageProps} />
    </div>
  ) 
  
}

export default MyApp
