import React from "react";
import './ContactMe.css';
import { MdHome, MdPhone, MdEmail } from 'react-icons/md';


function Card(props){

    const{title, icon, children} = props;
    return(
        <div className="card">
            <h3>{title}<span style={{marginLeft:"10px"}}>{icon}</span></h3>
            {children}
        </div>
    )
}
function ContactMe(){
//     const apiKey = "AIzaSyCTQjJ63CDgUTnuVcu1K-IOvw80-M-QDT4";
//   const address = encodeURIComponent("17%2F110A+Illupavilai+Palliyadi+p.o+Kanyakumari,+Tamil+Nadu+629169");

//   const mapUrl = `https://www.google.com/maps/place/@${address},15z?key=${apiKey}`;

    return(
        <>
        <div className="cardContainer">
            <Card title="Address" icon={<MdHome />}>
                {/* <p>{mapUrl}17/110A Illupavilai Palliyadi p.o Kanyakumari, Tamil Nadu 629169</p> */}
                <p>17/110A Illupavilai Palliyadi p.o Kanyakumari, Tamil Nadu 629169<a href="https://www.google.com/maps/?q=17/110A+Illupavilai+Palliyadi+p.o+Kanyakumari,+Tamil+Nadu+629169">View on Google Maps</a></p>
            </Card>
            <Card title="Phone" icon={<MdPhone />}>
                <p><a href="tel:+918610800892">+91 8610800892</a></p>
            </Card>
            <Card title="Email" icon={<MdEmail />}>
                <p><a href="mailto:jenishjeyadhas@gmail.com">jenishjeyadhas@gmail.com</a></p>
            </Card>
        </div>
        </>
    )
}
export default ContactMe;

