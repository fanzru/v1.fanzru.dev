import React from 'react';
import {HiMenu} from "react-icons/hi";
import {useRouter} from "next/router";
function MenuDropdown(props) {
  const navbarData = props.data
  const router = useRouter()
  return (
    <div className={"dropdown dropdown-end"}>
      <div tabIndex={"0"} className={"m-1 btn btn-sm btn-ghost"}>
        <HiMenu/>
      </div>
      <ul tabIndex={"0"} className={"menu dropdown-content w-52 bg bg-base-100 shadow rounded-md "}>
        {navbarData.map((data, idx) => {
          return(
            <li key={data.content}>
              <button onClick={()=>{router.push(data.href)}} className="py-2  rounded-md hover:bg-gray-400 hover:text-white"> {data.content}</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default MenuDropdown;