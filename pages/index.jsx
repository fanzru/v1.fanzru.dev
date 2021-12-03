import Head from 'next/head';
import Maintenance from "../components/maintenance";

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Hello i'm Affan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
        <meta property="og:title" content={"Hallo"} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={"https://4.bp.blogspot.com/-dlYC3oRgipc/VXKAJ8277lI/AAAAAAAAGxw/PSqW-Jf3LQQ/s1600/Assassination-Classroom-111.jpg"} />
      </Head>
      <div data-theme={"dark"}>
        <Maintenance/>
      </div>
    </div>


  )
}


