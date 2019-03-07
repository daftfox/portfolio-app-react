import React, { Component } from 'react';
import './App.scss';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import About from "../about/About";
import Peculiarities from "../peculiarities/Peculiarities";
import SoftSkills from '../softskills/SoftSkills';
import HardSkills from "../hardskills/HardSkills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experiences from "../experiences/Experiences";

class App extends Component {
    constructor() {
        super();

        this.state = {
            hideSplash: false
        }
    }

    componentDidMount () {
        AOS.init( {
            duration: 1000
        } );

        setTimeout(_ => {
            this.setState({
                hideSplash: true
            });
        }, 3000);
    }

    render () {
        return (
            <div className="app">
                <Header hideSplash={this.state.hideSplash}/>
                {this.state.hideSplash &&
                    <main className="app-content">
                        <About/>
                        <Peculiarities/>
                        <SoftSkills/>
                        <HardSkills/>
                        <Experiences/>
                    </main>
                }
                <Footer/>
            </div>
        );
    }
}

export default App;
