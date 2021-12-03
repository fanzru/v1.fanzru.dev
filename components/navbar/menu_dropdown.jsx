import React from 'react';
import {HiMenu} from "react-icons/hi";

function MenuDropdown(props) {
  const navbarData = props.data
  return (
    <div className={"dropdown dropdown-end"}>
      <div tabIndex={"0"} className={"m-1 btn btn-sm btn-ghost"}>
        <HiMenu/>
      </div>
      <ul tabIndex={"0"} className={"menu dropdown-content w-52 bg-base-100 shadow rounded-md"}>
        {navbarData.map((data, idx) => {
          return(
            <li key={data.content}>
              <a>{data.content}</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default MenuDropdown;