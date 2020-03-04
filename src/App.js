import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import SkillsContainer from './components/SkillsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import StudiesContainer from './components/StudiesContainer';
import raul from './assets/raul.png';
import montserrat from './assets/montserrat.png';
import utn from './assets/utn.png';
import belfort from './assets/belfort.jpg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "Dark", // Light or Dark
      avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQF0kJfoujajgg/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=TRuHSsgwcGPVONL74CWMr9fpdyLN2DV7fWPklLVouh8",
      flag: "https://cdn.countryflags.com/thumbs/argentina/flag-round-250.png",
      name: "Gramajo, Melisa Rocio",
      roll: "Software Engineer - QA Tester",
      description: "Ing. en Sistemas de Información, con experiencia en el área Informática (+2 años). Particularmente interesada en Quality Assurance.Soy una persona comprometida, tengo ideas innovadoras, me gustan los desafíos y nuevos proyectos que me pudieran proponer; así lograr crecer personal y profesionalmente.",
      mySkills: [
        {
          name: "HTML",
          level: 3,
          photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/html-logo-300x300.png",
          color: "#AB8C20",
          hashtags: [
            {
              tech: "geolocation",
              link: "https://www.w3schools.com/html/html5_geolocation.asp"
            }, {
              tech: "webStorage",
              link: "https://www.w3schools.com/html/html5_webstorage.asp"
            }, {
              tech: "accessibility",
              link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
            },
            {
              tech: "HTML6Tags",
              link: ""
            }
          ]
        },
        {
          name: "CSS",
          level: 2,
          photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/css-logo-300x300.png",
          color: "#4A90E2",
          hashtags: [
            {
              tech: "pseudo-elements",
              link: "https://www.w3schools.com/css/css_pseudo_elements.asp"
            }, {
              tech: "flexbox",
              link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            }]
        },
        {
          name: "Javascript",
          level: 1,
          photo: "https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/javascript-logo-300x300.png",
          color: "#EBD729",
          hashtags: [
            {
              tech: "es6",
              link: "https://www.w3schools.com/js/js_es6.asp"
            }, {
              tech: "es2020",
              link: "https://alligator.io/js/es2020/"
            }, {
              tech: "functionalProgramming",
              link: "https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5?gi=1e82492b7c73"
            }]
        }],
      myProjects: [
        {
          name: "RollingGOT",
          photo: "https://lh3.googleusercontent.com/Lb5o9RziqZWeBXUCYhBsuM-Ovro9lntW69wfOTA3UQzMBdeCD9PVw_J_1tei95p9DmRZTsh0J8pY5dNP-wGZt5o0L7kp1HY8nSMDSrBUVfDn67P2UeENgvR3SyD7YqBR1pGtyM7SaXa187qYymQPSaGns8MS8w0LnbclV8KpVfDAJPOCFcVKqkugr8RYNWSGo2AiYlOQogu_Ik6JwCkrFDBv2RRyo-J2v-xZA6Si4FItFVa-Ic0Lj3Nmx5t1IkebCO4bcFzDWBi4maEuumnTAcxO42yCWO0VNEVwLe0-vk06T1EYZbgw0wG-ismquAQxM_yz9N1uguQFyAgwCX2AJC6ymRG-nizZMLVgDoZSqQYQKkrnN5b26Yq2ZaWUYjo_YbJM6o2scvT21mj1uh0r--1tV78rMzfznCSGitXX9PhRsHDvl__rs4G2G2o0BJfIosrzPp7YWvvHKbrn3UkOgT77TAkrSs5OSN5mv1Y7Jo-TyTOgIcXa4EE-NKg9rMPqJl9DD1o09E0mgdVYNDlvGsUM2y6UiNm0_3u9KP8jozgVscqpKNJOFlGmIFrd3OPKCbti-nt1X_nNKfSacrhRMJExWR_-ItOJ0rbclOwd5k93ATdVUuA_57ci-I6fIRF0WG_xHmuuutNF6AZRTSHN--sZK0E4RGlvHvbd2OK7_oE48Db1zZt66gE=w1864-h890-no"
        },
        {
          name: "RollingMedical",
          photo: "https://lh3.googleusercontent.com/ncO0OpMdTTZi7gU2Lzsz6Qntf3kyPAIbwkHkLI3-l7d1qqOz-Bh5ST7NFEzlqjPL1MAkuKJg4Ww3eGwgWFBhIBrRD6n6KO6HGDSwiWPMqSGf8QwpMnoUSlluZ7sU3oyC9BIFbgGO_Tv6Yt3mVK1hEAt7RF8CXEdAhM0R1ip7896AAMylna9ax7ajuKBvSURvdhhQcvvVcSeEuZBmLvpbEYbsG7Is2goLqzJdkeERiycciCvsMH_Zv4_aqHb6TdEi_s-EuJW6uqNJaZholvxdrbguDjOcr7qC2wBvxczpLmOa-f-98ujzha4zpcU4Jzja-eZnsfMpGtC_fFQidgiM935BnLCP8uiOWTWoeysloZmN8msKFB1ZAzhRj9ZntTCoFmyaOQ_Jg_zPH-VVVzlSzxjheQtoOO9_aXadWQQI2eSJBIiXzgYlk2gtAdm6FhpP_jreS8FR-uzAWSeEIiRvk5CalsVKjqqkZvrN0LDzBQl5-Pk5RXrEXQ4lI4mperluwt12XSgW0khZQtArBTFkp0lFFn4ZPYnfNH4Tr0oTbKdTljvrtdSr-bakzElmja05pPVmj93RxVEq5MjLQKtpkjVIu4gDG0_J1nr7K9U6Fnr-qVIozYON3eD3gZqUod2KA275wwf1ZjINf49P8LZxgWk3aQv5CFrIytr6Ey62Ckaonser-xj8fn4=w1864-h836-no"
        }
      ],
      myStudies: [
        {
          level: "Secundario",
          place: "Nuestra Señora del Montserrat",
          year: "2007-2012",
          photo: montserrat
        },
        {
          level: "Universitario",
          place: "Universidad Tecnológica Nacional (UTN-FRT)",
          year: "2013-2019",
          photo: utn
        },
        {
          level: "Universitario",
          place: "Université de Technologie Belfort-Montbéliard",
          year: "2018",
          photo: belfort
        }
      ]
    }
  }

  changeTheme() {
    this.setState({theme: this.state.theme === "Dark" ? "Light" : "Dark"})
  }

  render() {
    const {
      theme,
      avatar,
      flag,
      name,
      roll,
      description,
      mySkills,
      myProjects,
      myStudies
    } = this.state

    const changeTheme = () => this.changeTheme();
    const changeThemeText = theme === "Dark" ? "tema claro" : "tema oscuro";
    
    return (
      <div className={`${theme} text-center p-2`}>
        <p className="text-left cursor-pointer" onClick={changeTheme}>{changeThemeText}</p>

        <Presentation
            avatar={avatar}
            flag={flag} 
            name={name}
            roll={roll}
            description={description}
            theme={theme}
        />
        
        <StudiesContainer studies={myStudies}/>

        <SkillsContainer skills={mySkills} theme={theme} />
        <ProjectsContainer projects={myProjects}/>
        <Footer name={name}/>
      </div>
    );
  }
}
