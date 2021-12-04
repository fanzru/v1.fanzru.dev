import React from 'react';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

function Profile(props) {
  
  const markdown = {
    text_1: "Hello my name is **Ananda Affan Fattahila**, you can call me **Affan** or **Nanda**. I'm currently **20** years old and I think this is still a young age :D , because a lot of people talk about being 20 years old. **Nice to meet you,** I hope we can have a **good relationship** wkw.",
    text_2: "I was born in **[Kebumen Regency, Central Java](https://goo.gl/maps/7kA1VVZNYESwvJUc8)** and until now I still live in Kebumen. I'm currently pursuing a bachelor's degree in **Computer Science** at **Telkom University** and now I'm doing an internship at **PT. XL Axiata Tbk**.",
    text_3: "I really like the path that I am currently fighting for, on campus I also join several organizations to increase relations and knowledge such as being the chairman of [**ILMY Tel-U**](https://www.instagram.com/ilmy_univtelkom/), diplomatic staff of [**BPM IF**](https://www.instagram.com/bpmiftelu/) legislation and academic staff of the New [**Generation of Indonesia (Genbi Tel-U)**](https://www.instagram.com/genbi_telu/). I also joined several laboratories such as a member back end developer of [**Advanced Software Engineering Lab**](https://www.instagram.com/rplgdc_/), member of data science at [**Data Science Lab**](https://www.instagram.com/bigdata.lab/) and currently doing an internship as a business analyst at [**Motion Lab**](https://www.instagram.com/bigdata.lab/).",
    text_4: "I have a **hobby** of **listening to music**. It might look funny, but the music I like the most is the genre **Dangdut**, **Koplo** or **songs from Central Java**.",
    contact_1: "I really like and am passionate about **connecting** with everyone, so if you want to contact me, you can use social media and the contact below:",
    contact_2: " In addition, you can [**view and read my resume here.**](https://drive.google.com/file/d/1xy6foprwhnv-xo_4EZjpJ0dSu5Cn3IaW/view?usp=sharing%22) I am very grateful, because you have visited my profile..",
  }
  const sosmeds = [
    {
      id: " - Email - [fattahilaaf080701@gmail.com](fattahilaaf080701@gmail.com)",
    },
    {
      id: " - Github - [https://github.com/Fanzru](https://github.com/Fanzru)",      
    },
    {
      id: " - Instagram - [https://www.instagram.com/fattahilaaf_/](https://www.instagram.com/fattahilaaf_/)",
    },
    {
      id: " - Linkedin - [https://www.linkedin.com/in/fanzru/](https://www.linkedin.com/in/fanzru/)",
    }
  ]

  return (
  <div>
    <div className="flex flex-col ">
      <div className={"flex flex-col items-center mt-10"}>
        <img src="fanzru.png" className="mask mask-squircle md:h-72"/>
      </div>
      <div className={""}>
        <h1 className="mt-10 mb-5 text-2xl md:text-4xl font-sora font-semibold">
            About
        </h1>
        <div className="mb-5 md:text-lg ">
          <ReactMarkdown children={markdown.text_1} remarkPlugins={[remarkGfm]} />
        </div>
        <div className="mb-5 md:text-lg ">
          <ReactMarkdown children={markdown.text_2} remarkPlugins={[remarkGfm]} />
        </div>
        <div className="mb-5 md:text-lg ">
          <ReactMarkdown children={markdown.text_3} remarkPlugins={[remarkGfm]} />
        </div>
        <div className="mb-5 md:text-lg ">
          <ReactMarkdown children={markdown.text_4} remarkPlugins={[remarkGfm]} />
        </div>
        <h1 className="mt-10 mb-5 text-2xl md:text-4xl font-sora font-semibold">
            Contact
        </h1>
        <div className={"md:text-lg "}>
         <ReactMarkdown children={markdown.contact_1} remarkPlugins={[remarkGfm]}dd/>
        </div>
        <div>
          <ul className="list-disc mx-4 mt-5 md:text-lg ">
            {sosmeds.map((sosmed, idx)=>
              <div>
                <li><ReactMarkdown children={sosmed.id} remarkPlugins={[remarkGfm]}dd/></li>
              </div>
            )
            }
          </ul> 
        </div>
        <div className="mb-7 mt-5 md:text-lg">
         <ReactMarkdown children={markdown.contact_2} remarkPlugins={[remarkGfm]}dd/>
        </div>
      </div>
    </div>
  </div>
);
}

export default Profile;