import React, { Component } from 'react';
import './Peculiarity.scss';

class Peculiarity extends Component {
    render() {
        return (
            <article className="peculiarity"
                     data-aos="zoom-in"
                     data-aos-once="false"
                     data-aos-delay={this.props.index * 150}>
                <i className={`peculiarity-icon ${this.props.iconClass}`}></i>
                <p className="peculiarity-description" dangerouslySetInnerHTML={this.getDescription()}></p>
            </article>
        );
    }

    getDescription() {
        return {__html: this.props.description};
    }
}

export default Peculiarity;