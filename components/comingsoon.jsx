import React from 'react';
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {IoIosDocument} from "react-icons/io"
import Footer from "./footer";
function Comingsoon(props) {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content flex flex-col ">
            <h1 className="mb-5 text-5xl md:text-7xl font-comforter">
              Coming Soon ...
            </h1>
            <p className={"mb-5 font-sora text-xs md:text-base"}>
              <i>don't forget to follow my story :D</i>
            </p>
            <Footer/>
        </div>
      </div>
    </div>
    // <div  className={"flex justify-center h-screen font-bold text-base md:text-5xl"} data-theme={"light"}>
    //   <h1 className={"flex items-center font-nunito"}>Hello I'm Ananda Affan Fattahila</h1>
    //   <p> </p>
    // </div>
  );
}

export default Comingsoon;