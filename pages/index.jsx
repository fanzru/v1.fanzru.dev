import Head from 'next/head';
import Maintenance from "../components/maintenance";

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Hello i'm Affan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div data-theme={"dark"}>
        <Maintenance/>
      </div>
    </div>


  )
}


