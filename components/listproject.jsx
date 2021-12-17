import React from 'react';
import Footer from "./footer";
import Image from 'next/image'
function ListProject(props) {
  const listproject = ([
    {
      "title": "Antriin Web Application",
      "picture": "/antriin.png",
      "decription": "Antriin merupakan sebuah webapps untuk membuat dan mengikuti antrian jadi lebih mudah dan menyenangkan.",
      "link_code": "https://fanzru.dev",
      "link_project": "https://inventory-lab.netlify.app/ ",
      "stack": ["GOLANG","ECHO","JAVASCRIPTS","NEXTJS","REACT","POSTGRESQL", "TAILWINDCSS"]
    },
    {
      "title": "Inventory Lab Web Application",
      "picture": "/inventorylab.png",
      "decription": "Inventory Lab Web Application merupakan sebuah aplikasi berbasis website untuk melakukan simpan pinjam pada sebuah inventory",
      "link_code": "https://fanzru.dev",
      "link_project": "https://antri-in.vercel.app/",
      "stack": ["JAVASCRIPTS","REACTJS","TAILWINDCSS","NODEJS","EXPRESSJS","CLOUDYNARY","MONGODB"]
    }
  ])

  return (
    <div className='font-sora bg-base-200'>
      <div className={"flex flex-col min-h-screen mx-4 md:mx-[300px] "}>
        <div className={""}>
          <h1 className={"mt-20 md:mt-28 font-sora text-4xl md:text-6xl uppercase font-bold"}>Project</h1>
          <p className={"text-sm md:text-xl md:mb-4"}>hello thanks for checking my project.</p>
        </div>
        
        <div>
          {listproject.map((project,index)=>{
            return (
              
                <div key={index} className={"w-full  mt-2 border-[2px] border-dashed border-gray-400 px-2 py-4 my-6 rounded-md"}>
                  <div className={"flex flex-wrap"}>
                    <img
                        src={listproject[index].picture}
                        className={"object-cover w-full md:w-1/2 border rounded-md"}
                    />
                    <div className={"mt-2 px-2 md:w-1/2"}>
                      <button className={"text-xl md:text-3xl text-left font-semibold hover:underline"}>{listproject[index].title}</button>
                      <div className={"flex flex-wrap text-[9px] gap-1 mt-2"}>
                        {listproject[index].stack.map((stack,idx) => {
                          return (
                            <div key={idx} className="">
                              <div className="border bg-blue-400 text-white px-2 py-1 font-medium rounded-[4px]">{stack}</div>
                            </div>
                          )
                        })}
                      </div>
                      <p className={"text-xs md:text-base mt-2 "}>{listproject[index].decription}</p>
                    </div>
                  </div>
                </div>
              
            )})
          }
        </div>
      </div>
    </div>
  )
}

export default ListProject;