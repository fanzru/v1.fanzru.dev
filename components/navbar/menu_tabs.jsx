import React from 'react';
import {useRouter} from "next/router";
function MenuTabs(props) {
  const router = useRouter()
  const activeMenu = props.activeMenu
  const navbarData = props.data

  return (
    // Forcing this component to use `navbarmenu` theme
    <div className={"flex mx-10 px-3 gap-5 font-nunito font-medium"}>
      {
        navbarData.map((data, idx) => {
          return (
              <button onClick={()=>{router.push(data.href)}} className={"font-semibold mx-5 block hover:font-bold"}>
                {data.content}
              </button>
          )
        })
      }
    </div>
  );
}

export default MenuTabs;