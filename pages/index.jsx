
import Maintenance from "../components/maintenance";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";

export default function Home(props) {

  return (
    <div>
      <Head title='Fanzru' />
      <div data-theme={"dark"}>
        <Navbar activeMenu={"Home"}/>
        <Maintenance/>
      </div>
    </div>
  )
}


