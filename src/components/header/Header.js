import React, { Component } from 'react';
import './Header.scss';
import brand from './images/timothy-fyi-fox-icon.png';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            wittyLoadingHint: `Fueling hydrogen`
        };

        this.wittyLoadingHints = [
            `Deploying solar cells`,
            `Brewing coffee`,
            `Setting up VPN`,
            `Watering plants`,
            `Discombobulating combobulator`,
            `Alerting authorities`
        ];
    }

    componentDidMount() {
        let currentHint = 0;
        let wittyLoader = setInterval(() => {
            this.setState({
                wittyLoadingHint: this.wittyLoadingHints[currentHint]
            });
            currentHint++;
            if (currentHint === this.wittyLoadingHints.length) {
                clearInterval(wittyLoader);
            }
        }, 450);
    }

    render() {
        return (
            <header className={`app-header ${!this.props.hideSplash ? 'splash' : ''}`}>
                <div className="app-header-brand">
                    <img className="brand" src={brand} alt='Timothy.fyi' />
                    <img className="brand loading" src={brand} alt='Timothy.fyi' />
                </div>

                <div className="app-title">
                    <div className="title-wrapper">
                        <h1 className="highlight">Timothy.fyi</h1>
                        <div className="witty-loading-hint">
                            <span>{this.state.wittyLoadingHint}...</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;