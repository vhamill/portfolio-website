import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutPage(props){

    return(
        <div className="mx-3 mx-md-3 mx-lg-5">
            <Hero title={props.title}/>
            <div className="about-me-box p-5">
                
                <img className="profile-picture-image img-fluid" src={props.imgSrc} alt={props.imgSrc} align="left"/>
                <div>
                    <p>My name is Vince Hamill. I am a new grad full stack software engineer with a BS in
                        Computer Science from Texas A&M University with Cum Laude honors. I also have minors 
                        in Mathematics and Cybersecurity. I am currently open to all
                        software engineering opportunities in the Greater New York City Area.</p>

                    <p>I am a motivated and hard-working young software engineer committed to doing exemplary 
                        work and learning and improving every day. I have a strong attention to detail and 
                        outstanding communication skills from extensive experience with Agile. I pride myself 
                        on being an excellent teammate and I always maintain 
                        clean and readable code that is well-documented and commented, so that my teammates 
                        can easily work with it. I have completed multiple projects building web applications 
                        in small teams in which I worked full stack and took a leadership role. 
                    </p>

                    <p>Due to both university and personal projects, I have accumulated full stack experience 
                            with React, Flask, and Ruby on Rails. I also had the opportunity to develop a video
                            game using Unity in a team of 4. All of my team projects have utilized Agile with 
                            consistent team meetings and sprint review presentations.</p>

                    <p>My coursework at Texas A&M University has included software engineering, data structures 
                            and associated algorithms, computer systems, computer security, cryptography, computer 
                            graphics, game development, algorithm design, analysis, and implementation, information 
                            storage and retrieval, and artificial intelligence.</p>

                    <p>I have programming experience with C#, C++, Java, Python, JavaScript, React, SQL, Kotlin, 
                            Ruby on Rails, Go, Unity, HTML, PHP, Matlab, and Haskell.</p>
                </div>

            </div>
        </div>
    );

}

export default AboutPage;