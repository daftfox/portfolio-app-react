import React, { Component } from 'react';
import './HardSkills.scss';
import android from './images/128x128/android.png';
import angular from './images/128x128/angular.png';
import arduino from './images/128x128/arduino.png';
import c from './images/128x128/c.png';
import cpp from './images/128x128/c++.png';
import css from './images/128x128/css.png';
import elasticSearch from './images/128x128/elasticsearch.png';
import express from './images/128x128/express.png';
import gitlab from './images/128x128/gitlab.png';
import html from './images/128x128/html.png';
import git from './images/128x128/git.png';
import ios from './images/128x128/ios.png';
import java from './images/128x128/java.png';
import javascript from './images/128x128/javascript.png';
import jenkins from './images/128x128/jenkins.png';
import jquery from './images/128x128/jquery.png';
import linux from './images/128x128/linux.png';
import mysql from './images/128x128/mysql.png';
import osx from './images/128x128/osx.png';
import php from './images/128x128/php.png';
import react from './images/128x128/react.png';
import rxjs from './images/128x128/rxjs.png';
import sequelize from './images/128x128/sequelize.png';
import springBoot from './images/128x128/spring-boot.png';
import typescript from './images/128x128/typescript.png';
import windows from './images/128x128/windows.png';

class HardSkills extends Component {
    constructor() {
        super();
        this.skills = [
            {
                name: `Android`,
                img: android
            }, {
                name: `Angular`,
                img: angular
            },{
                name: `Arduino`,
                img: arduino
            },{
                name: `C`,
                img: c
            },{
                name: `C++`,
                img: cpp
            },{
                name: `CSS`,
                img: css
            },{
                name: `ElasticSearch`,
                img: elasticSearch
            },{
                name: `Express`,
                img: express
            },{
                name: `Gitlab`,
                img: gitlab
            },{
                name: `HTML`,
                img: html
            },{
                name: `iOS`,
                img: ios
            },{
                name: `Git`,
                img: git
            },{
                name: `Java`,
                img: java
            },{
                name: `JavaScript`,
                img: javascript
            },{
                name: `Jenkins`,
                img: jenkins
            },{
                name: `jQuery`,
                img: jquery
            },{
                name: `Linux`,
                img: linux
            },{
                name: `MySQL`,
                img: mysql
            },{
                name: `OSX`,
                img: osx
            },{
                name: `PHP`,
                img: php
            },{
                name: `React`,
                img: react
            },{
                name: `RxJS`,
                img: rxjs
            },{
                name: `Sequelize`,
                img: sequelize
            },{
                name: `Spring`,
                img: springBoot
            },{
                name: `TypeScript`,
                img: typescript
            },{
                name: `Windows`,
                img: windows
            },
        ]
    }

    render() {
        return (
            <section className="hardskills">
                <div className="hardskills-content"
                     data-aos="fade-up"
                     data-aos-once="false">
                    <header className="hardskills-content-header">
                        <h1 className="hardskills-content-title">
                            Hard skills
                        </h1>
                        <h2 className="hardskills-content-subtitle">
                           But what do you do?
                        </h2>
                    </header>
                    <content>
                        <p>
                            Some engineers identify themselves as a back-ender, some as a front-ender. However I think
                            that is equivalent to a chef working in a three star restaurant who limits himself to only
                            poaching eggs. In a world full of information technology, such as we live in, I couldn't
                            ever limit myself to only one area of expertise. I think of myself as an <strong> all-around
                            DevOps engineer</strong> with <strong>extensive knowledge</strong> of IoT, hardware design,
                            front-end frameworks, back-end services and almost anything in between.
                        </p>
                    </content>
                </div>
                <div className="hardskills-cover">
                    <div className="skills">
                        {this.skills.map( (skill, key) =>
                            <article className="skill"
                                     key={key}
                                     data-aos="fade-up"
                                     data-aos-delay={key * 50}
                                     data-aos-once="false">
                                <img className="skill-icon"
                                     src={skill.img}
                                     alt={skill.name}
                                     title={skill.name} />
                                <span className="skill-label">{skill.name}</span>
                            </article>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default HardSkills;