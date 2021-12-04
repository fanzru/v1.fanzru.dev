import React from 'react';
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {IoIosDocument} from "react-icons/io"
import Footer from "./footer";
function Maintenance(props) {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content ">
          <div className=" md:w-3/5">
            <h1 className="mb-5 text-5xl md:text-7xl font-comforter">
              Hello There
            </h1>
            <p className="mb-5 font-sora text-xs md:text-base">
              My name is <strong>Ananda Affan Fattahila</strong>, you can call me <strong>Affan</strong>,
              I'm currently studying to become <strong>a Software Engineer </strong>
              and <strong>Product Management</strong>. For now, I'm still developing this website hehe.
            </p>
            <p className={"mb-5 font-nunito text-xs md:text-base"}>
              <i>Thank you for your visit :)</i>
            </p>

            <div className={"flex justify-center flex-wrap gap-4"}>
              <a href={"https://github.com/Fanzru"} className="btn btn-outline">
                <AiFillGithub/>
              </a>
              <a href={"https://www.linkedin.com/in/fanzru/"} className="btn btn-outline">
                <FaLinkedin/>
              </a>
              <a href={"https://drive.google.com/file/d/1xy6foprwhnv-xo_4EZjpJ0dSu5Cn3IaW/view?usp=sharing"} className="btn btn-outline">
                <IoIosDocument/>
              </a>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
    // <div  className={"flex justify-center h-screen font-bold text-base md:text-5xl"} data-theme={"light"}>
    //   <h1 className={"flex items-center font-nunito"}>Hello I'm Ananda Affan Fattahila</h1>
    //   <p> </p>
    // </div>
  );
}

export default Maintenance;