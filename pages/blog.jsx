import Comingsoon from "../components/comingsoon";
import Navbar from "../components/navbar/navbar";


export default function Blog(props) {
  return (
    <div>
      <div data-theme={"dark"}>
        <Navbar activeMenu={"Blog"}/>
        <Comingsoon/>
      </div>
    </div>
  )
}


