import { useState } from "react";
// import { motion, AnimatePresence} from 'framer-motion'

function Career() {
  const [companyVisible, setCompanyVisible] = useState(0);
  const companies = [{
    name: "Ya.Practicum",
    post: 'Front-end developer (student)',
    time: '2022 - Present · Full-time',
    skills: ['HTML','CSS','BEM','JavaScript','TypeScript','React.js','WebPack','Node.js','MongoDB','Git'],
    text: ['Под присмотром опытных менторов создавал проекты:',
    'Mesto – интерактивная страница, аналог «Россграма». Реализована возможность удаления и лайка карточки, авторизации и регистрации пользователей, изменение информации пользователя. Содержит front-end и back-end части.',
    'HotelBooking – адаптированный лендинг по аренде домов, для загородного отдыха. Разрабатывался для конкурса.',
    'Russian-travel – лендинг о путешествиях по России.',
    'Прочёл learn.javascript.ru, Кайла Симпсона, документацию по React.js и TypeScript. В свободное время разрабатываю следующие проекты:']
  },
   {name: "ROSCOSMOS (NPCAP)",
   post: 'Lead electronics hardware engineer',
   time: '2011 - Present · Full-time',
   skills: ['C++','Asm'],
   text: ['Разрабатывал ПО и проводил рефакторинг чужого кода (C++, Asm)',
   'Отвечал за весь цикл разработки медицинской техники',
   'Руководил командой из 5 человек и обучал сотрудников',
   'Разрабатывал техническую и эксплуатационную документацию',
   'Занимался технической поддержкой и вводом в эксплуатацию',
]}];
  const descriptionList = companies.map((company,index) => {
    return (
        (companyVisible === index) && <Description description={company} key={index}/>
      )
  })

  const companyList = companies.map((company,index) => {
    return (
        <Company name={company.name} index={index} key={index} />
      )
    })

  function Company({name,index}) {
    return (
      <li className={companyVisible === index ? "career__switch-cell career__switch-cell_active" : "career__switch-cell"} onClick={() => setCompanyVisible(index)}>
        <p className={companyVisible === index ? "career__switch-text career__switch-text_active" : "career__switch-text"}>{name}</p>
        {companyVisible === index ? <p className="career__switch-arrow">></p> : ''}
      </li>
      );
    }



    function Description({description}) {

     const skillsList = description.skills.map((skill,index) => {
      return (
        <span className="career__skill" key={index}>{skill}</span>
        )
      })

      const textList = description.text.map((text,index) => {
        return (
          <p className="career__company-text" key={index}>{text}</p>
          )
        })

      return (
          <div className="career__description">
            <h3 className="career__company-header">{description.post}</h3>
            <p className="career__company-post-header">{description.time}</p>
            <div className="career__skills">
              { skillsList}
            </div>
            {textList}
          </div>
        );

    }

  return (
    <section  className="career">
          <p className="career__pre-header" id="workExp">Career path</p>
          <h2 className="career__header">Work Experiences</h2>
          <div className="career__container">
            <ul className="career__switcher">
              {companyList}
            </ul>
            {descriptionList}
          </div>
        </section>
    );
}

export default Career;