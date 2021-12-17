import React from 'react';
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {IoIosDocument} from "react-icons/io"
import Footer from "./footer";
import Typical from 'react-typical'
function Maintenance(props) {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content ">
          <div className=" md:w-3/5">
            <h1 className="mb-5 font-bold text-4xl md:text-5xl font-sora">
            <Typical
              steps={['Hello', 1000, 'Hello There!', 500]}
              wrapper="p"
            />
            </h1>
            <p className="mb-5 font-sora text-sm md:text-base">
              My name is <strong className={"underline decoration-gray-500 decoration-2"}>Ananda Affan Fattahila</strong>, you can call me <strong>Affan</strong>,
              I'm currently studying to become <strong className={"underline decoration-gray-500 decoration-2"}>a Software Engineer </strong>
              and <strong className={"underline decoration-gray-500 decoration-2"}>Product Management</strong>. For now, I'm still developing this website hehe.
            </p>

            <div className={"flex justify-center flex-wrap gap-4"}>
              <a href={"https://github.com/Fanzru"} className="btn btn-outline shadow-md shadow-gray-400">
                <AiFillGithub/>
              </a>
              <a href={"https://www.linkedin.com/in/fanzru/"} className="btn btn-outline shadow-md shadow-gray-400">
                <FaLinkedin/>
              </a>
              <a href={"https://drive.google.com/file/d/1xy6foprwhnv-xo_4EZjpJ0dSu5Cn3IaW/view?usp=sharing"} className="btn btn-outline shadow-md shadow-gray-400">
                <IoIosDocument/>
              </a>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;