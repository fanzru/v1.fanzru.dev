import React from 'react';
import MenuDropdown from "./menu_dropdown";
import MenuTabs from "./menu_tabs";
import {useRouter} from "next/router";
function  Navbar(props) {
  const router = useRouter()
  const activeMenu = props.activeMenu
  const navbarData = [
    {
      content: "Blog",
      href: "/blog"
    },
    {
      content: "Projects",
      href: "/projects"
    },
    {
      content: "Story",
      href: "https://story.fanzru.dev"
    },
    {
      content: "About",
      href: "/about"
    }
  ]

  return (
    <div className={"flex flex-row px-10 py-2 md:py-4 z-10  border-b-2 border-dashed fixed items-center justify-between md:justify-start w-screen bg-white"}>
      {/* Logo */}
      <button onClick={()=> {router.push("/")}} className={"font-comforter text-2xl font-semi"}>Fanzru.dev</button>
      {/* Menu */}
      <div className={"block md:hidden font-sora"}>
        <MenuDropdown data={navbarData} />
      </div>
      <div className={"hidden md:block font-sora "}>
        <MenuTabs data={navbarData} activeMenu={activeMenu}/>
      </div>

    </div>
  );
}

export default Navbar;