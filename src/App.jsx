import { useState } from 'react'
import './App.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Nav() {
  return (
    <div>
      <Container>
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
       <p class="intro">I'm a double-degree student in<mark>computer science</mark>@ the University of Waterloo 
          and<mark>business administration</mark>@ Wilfrid Laurier University</p>
       <p class="currently"> Currently: QTS Software Developer Intern @ RBC </p>
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
          <Col classname="col-headshot">
            <img className="headshot" src="lauryne_headshot.png"></img>
          </Col>

          
          <Col className="col-facts">
            <Fade right>
            <p className="fact">I'm interested in the intersection of business and technology, so I'm working towards building a career that blends<mark>software engineering</mark>and<mark>finance</mark></p>
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

  const bulletpoints = job.bullets.map(bullet => <li>{bullet}</li>);
  
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
                      <ul>{bulletpoints}</ul>
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
      <RowExperience job={{ company: "RBC Capital Markets",
                            title: "Quantitative Technology Services Software Developer Intern",
                            date: "Jan - Apr 2024",
                            bullets: ["Implemented multiple production level workflows on Airflow (Python) that performed automated push reporting to improve the data accuracy of a $400M+ portfolio",
                                      "Maintained 3+ databases on Microsoft SQL Server by writing queries to backfill missing data, adding new fields and updating records",
                                      "Integrated the Tableau REST API and an AWS S3 Bucket into Airflow to provide automated pull reporting centralized on a single platform, increasing analysis efficiency by 15%",
                                      "Worked directly with directors, project managers and business managers to transform business objectives into technical solutions that were implemented, presented and delivered beating deadlines"],
                            tools: "Tools: Python, SQL, Airflow, Microsoft SQL Server, Github, Helios, AWS" }} />
      </Slide>

      <Slide bottom>
      <RowExperience job={{ company: "STEMchats",
                            title: "Technology Coordinator",
                            date: "2021-2022",
                            bullets: ["Developed responsive websites using HTML & SCSS along with Bootstrap",
                                      "Implemented a web scraping feature using Python to fetch and store the website’s content",
                                      "Designed wireframes for new websites which improved efficiency when developing collaboratively"],
                            tools: "Tools: HTML, SCSS, Bootstrap, Javascript, Firebase, Python" }} />
      </Slide>

      <Slide bottom>
      <RowExperience job={{ company: "Correlation One",
                            title: "Data Science 4 All Fellow",
                            date: "Apr - Aug 2021",
                            bullets: ["Analyzed the issue of food insecurity through data cleaning and exploratory data analysis with Python and Jupyter",
                                      "Enhanced the project with data visualization on an interactive Tableau dashboard and a detailed report of the research",
                                      "Graduated with honours from the program and the final project was nominated a “Crowd Favorite”"],
                            tools: "Tools: Python, Pandas, Seaborn, Matplotlib, Jupyter Notebook, Tableau" }} />
      </Slide>

      {/* <Slide bottom>
      <RowExperience job={{ company: "Altimex Consulting",
                            title: "Social Media Manager",
                            date: "2020-2021",
                            bullets: ["Implemented a digital marketing plan to grow a small business’ online presence",
                                      "Managed multiple social media pages and used in-app analytics to track important key performance indicators",
                                      "Created content catered to their target audience through articles on the website using WordPress"],
                            tools: "Tools: WordPress, Meta Business Suite, Adobe InDesign, Adobe Premiere Pro" }} />
      </Slide> */}
      
      <Slide bottom>
      <RowExperience job={{ company: "Canada Learning Code",
                            title: "Teen Ambassador",
                            date: "2019-2022",
                            bullets: ["Led a team of 5 to develop a website with exercises to combat teens’ stress levels and won 1st place in the hackathon",
                                      "Created a medium-fidelity prototype for a productivity application",
                                      "Mentored at Girls Learning Code workshops, providing assistance and feedback to young coders"],
                            tools: "Tools: HTML, CSS, Javascript" }} />
      </Slide>
    </div>
    

  );
}

function Card({project, children}) {
  let apps = project.apps;
  return (
    <div className="card">

        <div classname="card-img">
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
