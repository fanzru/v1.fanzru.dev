import React from 'react';

function MenuTabs(props) {
  const activeMenu = props.activeMenu
  const navbarData = props.data

  return (
    // Forcing this component to use `navbarmenu` theme
    <div className={"flex mx-10 px-3 gap-5 font-nunito"}>
      {
        navbarData.map((data, idx) => {
          return (
              <button className={"font-medium mx-5 block hover:font-bold"}>
                {data.content}
              </button>
          )
        })
      }
    </div>
  );
}

export default MenuTabs;