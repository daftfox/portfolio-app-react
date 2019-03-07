import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Experiences.scss';
import rabobank from './images/rabobank.png';
import adesys from './images/adesys.png';
import ois from './images/ois.png';
import ordina from './images/ordina.png';
import triple from './images/triple.png';
import tws from './images/the-weird-science.png';
import anwb from './images/anwb.png';
import aratus from './images/aratus.png';

class Experiences extends Component {
    constructor() {
        super();

        this.experiences = [
            {
                name: `Triple`,
                period: `Apr 2012 / Sep 2013`,
                img: triple,
                products: [
                    `Achmea Even Tanken`,
                    `Snipp-IT`,
                    `Voice of Holland`,
                    `Crash-analytics`
                ],
                description: `Triple was my first job as a developer when they plucked me from class the third year of college. They allowed me to try out many different facets of development including web, mobile and operations. They attempted to mold me into a professional developer, although that would take a little more time yet.`
            },{
                name: `Adésys`,
                period: `Jan 2014 / Jul 2015`,
                img: adesys,
                products: [
                    `Livind`
                ],
                description: `At Adésys I was part of a team building a complete system that allows seniors to live happily and independently for longer. Most of my work concerned the front-end, but often supported in back-end development as well. Since Adésys designs and produces a lot of its hardware in-house I was able to become more proficient with microelectronics as well.`
            },{
                name: `OIS`,
                period: `Jul 2015 / Jul 2016`,
                img: ois,
                products: [
                    `SDS Medical`
                ],
                description: `At OIS I was responsible for developing a prototype front-end to replace the outdated version that was still used in many of their products. Further improvement on the product brought with it the requirement of delving deeply into the Oracle databases.`
            },{
                name: `Ordina`,
                period: `Aug 2016 / Feb 2018`,
                img: ordina,
                products: [
                    `Knowledge Inventory Tool`,
                    `Code and Comedy`
                ],
                description: `Ordina has been a real game-changer for me and my entry point into consultancy. I was personally responsible for designing, developing and integrating a registration website for the upcoming Code and Comedy event.`
            },{
                name: `Rabobank`,
                period: `Oct 2016 / Feb 2018`,
                img: rabobank,
                products: [
                    `Mobile Banking App`,
                    `PSD2 APIs`
                ],
                description: `Being the second largest bank in the Netherlands claiming about a third of the market, Rabobank is filled to the brim with skilled developers. During my time here I have worked in two teams, first working on several features of their Mobile banking app. After my first team was disbanded I joined the API team responsible for building APIs that allow third party developers to connect to Rabobank services.`
            },{
                name: `Aratus`,
                period: `Jul 2017 / Jul 2017`,
                img: aratus,
                products: [
                    `Frida`
                ],
                description: `When the NotPetya malware struck, dozens of logistics companies were stumped. Networks were down, ledgers wiped and no-one knew where stuff was supposed to go or be. Aratus hired four developers plus myself to restart operations at one of their customers in Sweden, where we had three days to get everything up and running again. We delivered successfully three grueling days of intense and unadulterated programming later.`
            },{
                name: `The Weird Science`,
                period: `Current employer`,
                img: tws,
                products: [
                    `Oh my batteries`,
                    `SpaceX Monitor`,
                    `I love hue 2`
                ],
                description: `At The Weird Science all kinds of nerds are welcome. As long as you're good. The mix of consultancy, entrepeneurism, R&D and freedom to pursue personal interests make this a challenging yet rewarding job.`
            },{
                name: `ANWB`,
                period: `Current client`,
                img: anwb,
                products: [
                    `Connected Car`,
                    `Major Tom`
                ],
                description: `ANWB offers customers the chance to order a dongle that connects their car to the web and a fancy mobile app. I feel honored to add my own creativity to this product.`
            },
        ];
    }

    render() {
        return(
            <section className="experiences">
                <h1 className="experiences-content-title">Experiences</h1>
                <span className="experiences-content-subtitle">Because Rome wasn't built in a day either</span>
                <div className="experiences-content">
                    <VerticalTimeline className="experience-timeline">
                    {this.experiences.map( (experience, key) =>
                        <VerticalTimelineElement
                            key={key}
                            className="experience"
                            date={experience.period}
                            iconStyle={{ background: '#fff', color: '#222', padding: '10px', marginLeft: '-40px' }}
                            icon={<img className="experience-logo" src={experience.img} alt={experience.name} title={experience.name} />}
                        >
                            <h2 className="experience-name">{experience.name}</h2>
                            <p className="experience-description">{experience.description}</p>

                            <h3 className="experience-products-title">Products</h3>
                            <ul className="experience-products">
                            {experience.products.map((product, key) =>
                                <li key={key}>
                                    {product}
                                </li>
                            )}
                            </ul>
                        </VerticalTimelineElement>
                    )}
                    </VerticalTimeline>

                </div>
            </section>
        );
    }
}

export default Experiences;