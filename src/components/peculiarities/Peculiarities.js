import React, { Component } from 'react';
import './Peculiarities.scss';
import Peculiarity from '../peculiarity/Peculiarity';

class Peculiarities extends Component {
    constructor() {
        super();

        this.peculiarities = [
            {
                iconClass: 'fas fa-coffee',
                description: `I am fueled by <strong>coffee</strong>. After all, software engineers are nothing but machines converting cafeine into code.`
            }, {
                iconClass: 'fas fa-globe-asia',
                description: `Ask me about my love for traveling if you feel like sitting down and listening for a couple of hours.<br/> (Or have a look at my <a href="https://www.polarsteps.com/TimothyClaassens" rel="noopener noreferrer" target="_blank">Polarsteps</a> page)`
            }, {
                iconClass: 'fas fa-paw',
                description: `I have a weak spot for felines and other animals. In fact, I love <strong>all</strong> animals.`
            }, {
                iconClass: 'fas fa-utensils',
                description: `The kitchen holds few secrets for me. I love asian cuisine and you can always wake me up in the middle of the night for a proper bowl of ramen.`
            }, {
                iconClass: 'fas fa-hand-spock',
                description: `I'm a total sci-fi fan.<br/> Who would have guessed?`
            }, {
                iconClass: 'fas fa-leaf',
                description: `I'm an environmentalist and always strive to improve the connection between humans and nature. I kinda like it here on this small planet and I would like to keep liking it in the future.`
            }
        ];
    }

    render() {
        return(
            <section className="peculiarities">
                {this.peculiarities.map( (peculiarity, index) =>
                    <Peculiarity key={index}
                                 index={index}
                                 iconClass={peculiarity.iconClass}
                                 description={peculiarity.description} />
                )}
            </section>
        );
    }
}

export default Peculiarities;