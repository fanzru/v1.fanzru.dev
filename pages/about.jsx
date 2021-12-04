import Profile from "../components/profile";
import Navbar from "../components/navbar/navbar";
import Footertwo from "../components/footer/footertwo"

export default function About(props) {
  return (
    <div>
      <div data-theme={"dark"}>
        <Navbar activeMenu={"Blog"}/>
        <div className="bg-base-200">
            <div className={"h-[58px] z-0"} />
            <div className={"container min-h-screen mx-auto px-2 md:px-[15%]"}>
                <Profile/>
            </div>
            <Footertwo/>   
        </div>
        
      </div>
    </div>
  )
}


