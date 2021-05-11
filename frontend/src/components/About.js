import React from 'react';

const styles = {
    margin: "10px 20px 10px 20px",
};

export const About = () => {
    return (
        <div style={styles}>
            <h2 id="about">About</h2>
            <p>Project made under the guidance of Prof. V. B. Nikam in the course - Introduction to Geospatial Technologies by S.Y. B.Tech. Information Technology students of Group 8:</p>
            <ul>
                <li>191080040 - Pankaj Khushalani</li>
                <li>191080041-  Prajwal Kolte</li>
                <li>191080058-  Rajan Patil</li>
                <li>201080908 - Sanket Bhosale</li>
            </ul>
            <hr/>
            <h3 id="problem-statement">Problem Statement</h3>
            <p>The rampant rise in air pollution in Indian metropolitan cities like Delhi, Mumbai, Kolkata, etc. has been a major contributing factor towards degrading the ambient air quality day by day. The degradation of air quality is a major environmental problem that affects people living in several urban areas and the wildlife of the surrounding regions. The data regarding the air quality index is arbitrarily available and comes from discrete sources; it is not present layer-wise or timeline-wise on a single platform. We aim to provide a platform that will overcome this situation by mapping the air quality data of major cities in India. </p>
            <hr/>
            <h3 id="objectives">Objectives</h3>
            <ul>
                <li><p>To obtain historical as well as live data to be mapped using Google Maps API.</p></li>
                <li><p>To create a Flask server to facilitate data availability for the frontend which will host the Google Maps API.</p></li>
                <li><p>To build a frontend using React.js to display data that has been mapped on Google Maps.</p></li>
                <li><p>To deploy the Flask server on Heroku to ensure constant data collection and availability by scheduling API calls.</p></li>
                </ul>
            <hr/>
            <p>The Flask API thus made is deployed <a href="http://swas-aqiapi.herokuapp.com">here</a>
            <br/>And this is the React.js frontend</p>
        </div>
    )
}

export default About;