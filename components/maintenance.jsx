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
              Fanzru.dev
            </h1>
            <p className="mb-5 font-sora text-xs md:text-base">
              Hello, my name is
              <strong> Ananda Affan Fattahila, </strong>
              I am someone who is related to web development and product management. This is a website that I am currently building.
            </p>
            <p className={"mb-5 font-sora text-xs md:text-base"}>
              Thank you for your visit :)
            </p>

            <div className={"flex justify-center flex-wrap gap-4"}>
              <a href={"https://github.com/Fanzru"} className="btn btn-outline">
                <AiFillGithub/>
              </a>
              <a href={"linkedin.com/in/fanzru"} className="btn btn-outline">
                <FaLinkedin/>
              </a>
              <a href={"https://drive.google.com/file/d/19TO95rTNCLre7yHYiec-a-1eTj_rBi5U/view?usp=sharing"} className="btn btn-outline">
                <IoIosDocument/>
              </a>
            </div>
            <div className={"font-comforter font-bold fixed bottom-4 left-0 w-full text-center"}>
              @2021 Ananda Affan Fattahila, All Right Reserved.
            </div>
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