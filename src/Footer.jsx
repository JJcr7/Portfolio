import React from "react";
// import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
  return (
    <>
    <footer className="footer">
      <div className="footercontainer">
       <div>
       <p className="copyright">© {new Date().getFullYear()} Jenish Jeyadhas</p>
       </div>
       <div className="sociallinksdiv">
       <ul className="social-link">
            <li className="social-links">
                <a href="https://www.linkedin.com/in/jenish-jeyadhas-1716bb201/">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                </a>
            </li>
            <li className="social-links">
                <a href="https://www.instagram.com/jenish_jeyadhas/">
                    <FontAwesomeIcon icon={faInstagram} className="instagram" />                  
                </a>
            </li>
            <li className="social-links">
                <a href="https://github.com/JJcr7">
                    <FontAwesomeIcon icon={faGithub} className="github" />                   
                </a>
            </li>
            <li className="social-links">
                <a href="https://twitter.com/sina_terasai">
                    <FontAwesomeIcon icon={faXTwitter} className="twitter" />                   
                </a>
            </li>
        </ul>
       </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

