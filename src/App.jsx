import { useState } from 'react'
import './App.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Nav() {
  return (
    <div className="sectionnav">
      <Container >
        <Row className="sectionheader">
          <Col className="nav-item"><a href="#about">about</a></Col>
          <Col className="nav-item"><a href="#experience">experience</a></Col>
          <Col className="nav-item"><a href="#projects">projects</a></Col>
          <Col className="nav-item"><a href="#contact">contact</a></Col>
        </Row>
      </Container>
    </div>
  );
}

function Header() {
  return (
    <div className="section">
      <Fade cascade>
       <h1 className="hey">Hey, I'm Lauryne!</h1>
      </Fade>

      <Fade>
       <p className="intro">I'm a double-degree student in<mark>computer science</mark>@ the University of Waterloo 
          and<mark>business administration</mark>@ Wilfrid Laurier University</p>
       {/* <p className="currently"> Currently: QTS Software Developer Intern @ RBC </p> */}
      </Fade>
    </div>
   
  );
}

function About() {
  return (
    <div id="about" className="section">
      <br></br>
  
      <Fade cascade>
      <h2>About Me</h2>
      </Fade>
      <Container>
        <Row>
          <Col xs="12" sm="4" className="col-headshot">
            <img className="headshot" src="lauryne_headshot.png"></img>
          </Col>

          
          <Col xs="12" sm="8" className="col-facts">
            <Fade right>
            <p className="fact">I enjoy working with numbers and data, whether building software to generate insights or developing systems that make data easier to work with. This draws me to roles in technology, finance or <mark>both</mark>!</p>
            </Fade>

            <Fade right>
            <p className="fact">A goal of mine is to contribute to the initiatives that have encouraged me to pursue a career 
              in technology, that's why I<mark>mentor</mark>at Girl Learning Code events from Canada Learning Code</p>
            </Fade>

            <Fade right>
            <p className="fact">I'm<mark>bilingual</mark>! I'm a French native, fluent in English and I'm learning Spanish</p> 
            </Fade>
            
          </Col>
        </Row>
        
      </Container>
      
    </div>
  );
}

function RowExperience({job}) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  // const bulletpoints = job.bullets.map(bullet => <li>{bullet}</li>);
  
  return(
    <>
    <Row className="experience">
      <Col md="3" className="col-experience">
        <p className="maininfo"><b>{job.company}</b></p>
        {showMore && <p className="date">{job.date}</p>}
      </Col>
      <Col md="7" className="col-experience">
        <p className="maininfo">{job.title} <br></br></p><p className="tools">{job.tools}</p>
        {showMore && <p className="moreinfo">
                        {job.desc}
                      <p className="tools"></p></p>}
      </Col>
      <Col md="1" >
        <button className="arrow-down" onClick={handleClick}>
          {showMore ? <img src="minus.svg"></img> : <img src="arrowdown.svg"></img>}
        </button>
      </Col>
    </Row>
    <hr className="linebreak"></hr>
    </>
  );
}

function Experience() {
  
  return (
    <div id ="experience" className="section">
      <br></br>

      <Fade cascade>
      <h2>My Experience</h2>
      </Fade>

      <Slide bottom>
       <RowExperience job={{ company: "TD Securities",
                            title: "Global Markets Intern",
                            date: "Sep - Dec 2025",
                            desc: "Developed automated models and algorithms that transform market data into index rebalancing and forecasting tools used to support trading decisions.",
                            tools: "Tools: Python, Pandas, SQL, Excel, Bloomberg Terminal" }} />
      <RowExperience job={{ company: "RBC Capital Markets",
                            title: "QTS Software Developer Intern",
                            date: "Jan - Apr 2025",
                            desc: "Maintained external-facing web applications, delivering equity and macroeconomic insights to 100K+ users. Rebuilt and improved internal tools, including an expert-finding system and admin dashboards, reducing time to access internal expertise and improving team collaboration and system usability.",
                            tools: "Tools: HTML, CSS, Javascript, jQuery, React, Node.js" }} />
      </Slide>

      <Slide bottom>
      <RowExperience job={{ company: "RBC Capital Markets",
                            title: "QTS Software Developer Intern",
                            date: "Jan - Apr 2024",
                            desc: "Built production data pipelines to automate reporting, data validation, and visualization for a $400M+ project portfolio.",
                            tools: "Tools: Python, SQL, Airflow, Microsoft SQL Server, Github, Helios, AWS" }} />
      </Slide>

    </div>
    

  );
}

function Card({project, children}) {
  let apps = project.apps;
  return (
    <div className="card">

        <div className="card-img">
          <img className="desc" src={project.img}></img>
        </div>
        
        <div className="card-content">
          <h3>{project.title}</h3>
          <p className="tech">{project.technologies.join(" - ")}</p>
          <p className="body">{project.body}</p>
        </div>

        {children}
    </div>
  );
}

function CardFooter({apps}) {
  return (
    <div className="cardfooter">
      <Row className="row-cardfooter">
        {apps.github && (<Col className="icon" xs="3"> <a href={apps.github[1]} target="_blank"> <img src="github.svg"></img> </a> </Col>)}
        {apps.chrome && (<Col className="icon" xs="3"> <a href={apps.chrome[1]} target="_blank"> <img src="chrome.svg"></img> </a> </Col>)}
        {apps.tableau && (<Col className="icon" xs="3"> <a href={apps.tableau[1]} target="_blank"> <img src="graph.svg"></img> </a> </Col>)}
        {apps.link && (<Col className="icon" xs="3"> <a href={apps.link[1]} target="_blank"> <img src="link.svg"></img> </a> </Col>)}
      </Row>
    </div>  
  );
}

function Projects() {
  return (
    <div id="projects" className="section">
      <br></br>

      <Fade cascade>
      <h2>Projects</h2>
      </Fade>

      <Slide bottom>
      <Row>
      
        <Col className="col-card">
          <Card project = {{ img : "portfolio.png",
                             title: "Personal Website", 
                             technologies: ["React", "Javascript", "HTML", "SCSS"],
                             body : "The website you're currently on! This is a project I worked on to practice my Javascript and learn how to use React" 
                                  + " and plan to update as I learn more",
                          }}>

            <CardFooter apps={{ github:[true, "https://github.com/lauryneada/portfolio-website"] }}/>

          </Card>
        </Col>

        <Col className="col-card">
          <Card project = {{ img : "studyspace.png",
                             title: "StudySpace", 
                             technologies: ["Javascript", "HTML", "SCSS"],
                             body : "StudySpace is a productivity chrome extension that won 2nd place at the Queen's Programming Challenge in 2021",
                          }}>
            
            <CardFooter apps={{ github:[true, "https://github.com/lauryneada/yourspace"], 
                                chrome: [true, "https://chrome.google.com/webstore/detail/yourspace/hbnjcjicdodldbfjcplllfdimjoocjmk?utm_source=app-launcher&authuser=0"], 
                                link: [true, "https://lauryneada.github.io/yourspace/"] }}/>
          
          </Card>
        </Col>

        <Col className="col-card">
          <Card project = {{ img : "datascience.png",
                             title: "Data Analysis Project", 
                             technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
                             body : "As part of DS4A, I contributed to a data analysis of the impact COVID-19 had on food insecurity." +
                                    " The project includes a report, datafolio, tableau dashboard and presentation all available on Github.",
                          }}>

          <CardFooter apps={{ github: [true, "https://github.com/lauryneada/COVID19_FoodInsecurity"], 
                              tableau: [true, "https://public.tableau.com/app/profile/lauryne/viz/TheImpactofCOVID-19onFoodInsecurity/FinalDashboard"],
                              link: [true, "https://www.correlation-one.com/blog/ds4a-capstone-project-spotlight-crowd-favorites"] }}/>

          </Card>
        </Col>

      </Row>
      </Slide>
    </div>
  );
}

function Contact() {
  return(
    <div id="contact" className="sectioncontact">
      <Fade cascade>
      <h2>Contact Me</h2>
      </Fade>

      <Slide bottom>
      <Row className="row-contact">
        <Col className="contacticon" xs="4">
          <a href="https://www.linkedin.com/in/lauryne-assa/" target="_blank"> <img className="contact-logo" src="linkedin.png"></img> </a>
        </Col>
        <Col className="contacticon" xs="4">
          <a href="https://github.com/lauryneada" target="_blank"> <img className="contact-logo" src="github-logo.png"></img></a>
        </Col>
        <Col className="contacticon" xs="4">
          <a href="mailto:lauryne.assa@gmail.com" target="_blank"><img className="contact-logo" src="gmail.png"></img> </a>
        </Col>
      </Row>
      </Slide>
    </div>
  );
}

function Footer() {
  return(
    <div className="sectionfooter">
      <p className="endtext-top">Built & designed by Lauryne 👩🏾‍💻</p>
      <p className="endtext">© 2025 Lauryne Assa</p>
    </div>
  )
}

export default function Main() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
