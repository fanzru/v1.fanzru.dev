import Head from "next/head";
import React from 'react';
import Navbar from "./navbar/navbar";

function PageContainer(props) {
  return (
    <div>
      <Head>
        <title>{props.title + " | X-Camp Rumah IoT Indonesia"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Navbar activeMenu={props.activeMenu}/>
      <div className={"h-[58px]"} />
      <div className={"container min-h-screen mx-auto px-7"}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default PageContainer;