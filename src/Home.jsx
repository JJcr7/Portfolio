import React from "react";
import './Home.css';
import Header from "./Header";
import Footer from "./Footer";
import ContactMe from './ContactMe'

function Home(){

return(
        <>
      <div>
      <Header />
      <div id="portfolio" className="HomePageDiv" style={{backgroundImage:'url(/Home18.jpeg)'}}>
      <img className="mypic" src="/mypic.jpg" alt="" />
        <div className="HomePageDiv1">
        <typography className="HomePageHello">HELLO!</typography>
        <br></br>
        <typography className="HomePageMyContent">I'am <typography className="HomePageMyName">JENISH JEYADHAS</typography>. I'am a FullStack Developer.</typography>
        </div>
        
        </div>
       
        <div id="about" className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
            <div style={{display:"flex"}}>
            <typography className="PortfolioPageHead" style={{color:'white'}}>Full-Stack Developer: Building Scalable & Engaging Experiences</typography>
            </div>
           <div style={{display:"flex"}}>
           <p style={{color:'White'}} className="PortfolioPageDetails">Hi there! I'm a highly motivated and adaptable computer science graduate with 1.6 years of experience as a systems engineer and full-stack developer. My journey began with building the front-end for a vehicle parts company using React.js, and I've since expanded my expertise to full-stack development using Angular and Java SpringBoot. Driven by a passion for innovation and problem-solving, I'm eager to contribute to cutting-edge projects at a leading tech company.
            </p>
            <img className="workingprofessional" src="/workingprofessional.jpeg" alt="" />
           </div>
        </div>
        <div id="skills" className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
            
            <div style={{display:"flex"}}>
            <typography className="PortfolioPageHead" style={{color:'white'}}>Expertise & Skills</typography>
            </div>
           <div style={{display:"flex"}}>
           <img className="skills" src="/skills.jpeg" alt="" />
           <p style={{color:'White'}} className="PortfolioPageDetails">
            <ul>
            <li>Front-End Pro: React.js, JavaScript, HTML, CSS</li>
            <li>Full-Stack Fundamentals: Java, SpringBoot, API Development</li>
            <li>Additional Skills: Python, C Programming, DBMS, Data Structures</li>
            <li>Tools & Platforms: VS Code, Eclipse, Spring</li>
            </ul>
            </p>
            
           </div>
        </div>
        <div id="projects" className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
<div style={{display:"flex"}}>
<typography className="PortfolioPageHead" style={{color:'white'}}>Projects & Acheivements</typography>

    </div>
               <div  style={{display:"flex"}}>
               <p style={{color:'White'}} className="PortfolioPageDetails">
            <li>Developed and maintained the front-end for a vehicle parts e-commerce platform using React.js, resulting in a 15% increase in user engagement.</li>
            <br></br>
            <li>Collaborated as a full-stack developer on building a food ordering web application using Angular and Java SpringBoot, successfully launching on schedule and within budget.
            Consistently received positive feedback from colleagues for my problem-solving skills and collaborative spirit.</li>
            </p>
            <img className="orgculture" src="/Organizational Culture.jpeg" alt="" />
               </div>
        </div>
        <div className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
        <div style={{display:"flex"}}>
        <typography className="PortfolioPageHead" style={{color:'white'}}>Team Player & Leader</typography>
        </div>
           <div style={{display:"flex"}}>
           <img className="team" src="/prjtnachmnt.jpeg" alt="" />
           <p style={{color:'White'}} className="PortfolioPageDetails">
            Thriving in pressure situations, I excel at maintaining composure and delivering results under tight deadlines.
Easily adaptable to new environments, I quickly learn new technologies and integrate seamlessly into existing teams.
Passionate about sharing knowledge and supporting my team. I readily assist colleagues and take initiative to guide them whenever needed.
Strong communication skills enable me to clearly articulate ideas, collaborate effectively, and build positive relationships with stakeholders.
            </p>
            
           </div>
        </div>
        <div className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
            <div style={{display:"flex"}}>
            <typography className="PortfolioPageHead" style={{color:'white'}}>Beyond Tech</typography>
            </div>
            <div style={{display:"flex"}}>
            <p style={{color:'White'}} className="PortfolioPageDetails">
            When I'm not writing code, you can find me:

Leading my football team to victory! I've won numerous trophies and relish the challenge of strategizing and motivating my teammates.
Exploring new horizons. I'm an avid reader and love venturing out to discover hidden gems and broaden my perspective.
Always learning and growing. I dedicate an hour daily to learning new languages or honing my existing skills.
            </p>
            <img className="player" src="/football.jpeg" alt="" />
            </div>
        </div>
        <div className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
            <div style={{display:"flex"}}>
            <typography className="PortfolioPageHead" style={{color:'White'}}>Call to Action</typography>
            </div>
           <div style={{display:"flex"}}>
           <img className="action" src="/callaction.jpeg" alt="" />
           <p style={{marginRight:"10%"}} className="PortfolioPageDetails">
            I'm excited to leverage my diverse skills and unwavering dedication to contribute to a dynamic and innovative team at your company. Let's connect and discuss how I can help you achieve your goals!
            </p>
            
           </div>
        </div>
        <div id="contact" className="HomePageDiv2" style={{backgroundImage:'url(/Home18.jpeg)'}}>
            <div style={{display:"flex"}}>
            <typography className="PortfolioPageHead" style={{color:'white'}}>Reach Me Out</typography>
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"7%"}}>
            <ContactMe />
            </div>
        </div>
        <Footer />
      </div>
        </>
    )
}
export default Home;

