import Comingsoon from "../components/comingsoon";
import Navbar from "../components/navbar/navbar";
import ListProject from "../components/listproject"
import FooterTwo from "../components/footer/footertwo"

export default function Projects(props) {
  return (
    <div>
      <div data-theme={"dark"}>
        <Navbar activeMenu={"Blog"}/>
        <ListProject/>
        <div className={""}>
          <FooterTwo/>  
        </div>
        
      </div>
    </div>
  )
}


