
import Navbar from "../components/navbar/navbar";
import NotFound from "../components/notfound"

export default function Home(props) {

  return (
    <div>
      <div data-theme={"dark"}>
        <Navbar/>
        <NotFound/>
      </div>
    </div>
  )
}


