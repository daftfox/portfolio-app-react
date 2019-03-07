import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render() {
        return(
            <section className="about">
                <div className="about-content"
                     data-aos="fade-right"
                     data-aos-once="false">
                    <header className="about-content-header">
                        <h1 className="about-content-title">
                            Timothy
                        </h1>
                        <h2 className="about-content-subtitle">
                            Everything you wanted to know, but didn't dare to ask.
                        </h2>
                    </header>
                    <content>
                        <p>
                            Hi, I'm Timothy, a 28 years old, Netherlands based professional technophile,
                            <strong> Head of Semicolons</strong> at <strong>The Weird Science</strong> and working on
                            several innovative projects as well as doing consultancy work for clients.
                        </p>
                        {/*<p>*/}
                            {/*Since I was able to consciously wave around tools, almost everything with a power cord fell*/}
                            {/*victim to my screwdriver. I'm very eager to challenge both myself and others, feeling mildly*/}
                            {/*distressed as soon as a project is finished. I'm mostly self-taught and don't like to limit*/}
                            {/*myself to one area of expertise. <br/>Travel is what tickles the adventurous part of my mind and I*/}
                            {/*strongly aspire to experience all the good things this life has to offer. My dream job would*/}
                            {/*allow me and my better half to do just that; living and working on the road.*/}
                        {/*</p>*/}
                    </content>
                </div>
                <div className="about-cover cover-image"
                     data-aos="fade-left"
                     data-aos-once="false"/>
            </section>
        );
    }
}

export default About;