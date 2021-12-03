import React from 'react';
import MenuDropdown from "./menu_dropdown";
import MenuTabs from "./menu_tabs";

function  Navbar(props) {
  const activeMenu = props.activeMenu
  const navbarData = [
    {
      content: "Blog",
      href: "/"
    },
    {
      content: "Project",
      href: "/"
    },
    {
      content: "About",
      href: "/"
    }
  ]

  return (
    <div className={"flex flex-row px-10 py-2 md:py-4  border-b-2 border-dashed fixed items-center justify-between md:justify-start w-screen bg-white"}>
      {/* Logo */}
      <a href="/" className={"font-comforter text-3xl"}>Fanzru.dev</a>
      {/* Menu */}
      <div className={"block md:hidden"}>
        <MenuDropdown data={navbarData} />
      </div>
      <div className={"hidden md:block"}>
        <MenuTabs data={navbarData} activeMenu={activeMenu}/>
      </div>

    </div>
  );
}

export default Navbar;