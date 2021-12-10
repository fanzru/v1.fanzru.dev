import React from 'react';
import {AiFillGithub} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import {IoIosDocument} from "react-icons/io"
import Footer from "./footer";
import {useRouter} from "next/router"
function NotFound(props) {
  const router = useRouter()
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center">
            <p className="font-sora mb-4 font-semibold">hehe sorry page not found</p>
            <h1 className="font-nunito text-8xl font-bold md:text-9xl ">404</h1>
            <button onClick={()=>{router.push("/")}}className="border border-gray-400 rounded-lg font-sora mt-4 px-4 py-2 hover:bg-blue-300 hover:text-white ">back to home </button>
            <Footer/>
        </div>
      </div>
    </div>
  );
}

export default NotFound;