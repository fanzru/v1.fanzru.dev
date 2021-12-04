
import Maintenance from "../components/maintenance";
import Navbar from "../components/navbar/navbar";


export default function Home(props) {

  return (
    <div>

      <div data-theme={"dark"}>
        <Navbar activeMenu={"Home"}/>
        <Maintenance/>

      </div>

    </div>


  )
}


