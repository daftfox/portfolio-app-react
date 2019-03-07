import React, { Component } from 'react';
import './SoftSkills.scss';

class SoftSkills extends Component {
    render() {
        return (
            <section className="softskills">
                <div className="softskills-cover cover-image"
                     data-aos="fade-right"
                     data-aos-once="false"/>
                <div className="softskills-content"
                     data-aos="fade-left"
                     data-aos-once="false">
                    <header className="softskills-content-header">
                        <h1 className="softskills-content-title">
                            Soft skills
                        </h1>
                        <h2 className="softskills-content-subtitle">
                            Not every technophile is a sociophobe
                        </h2>
                    </header>
                    <content>
                        <p>
                            It's common belief that those who work with computers all lack a multitude of soft skills. This
                            couldn't be much further from the truth however and I too have collected and refined many of such
                            skills. Over the years I've had the chance to work at several high profile companies that demand
                            <strong> resourceful, persevering and invested</strong> employees. I dare say with confidence that I am a
                            <strong> good team player</strong> with experience in DevOps environments.<br/>
                            My <strong>eager curiosity</strong> drives me to see how far I can push the limit of my own knowledge.
                        </p>

                        <p>
                            I can make myself perfectly understandable in <strong>Dutch, English and German</strong> and
                            am known to get into trouble while attempting to speak others, such as Spanish or Mandarin.
                        </p>
                    </content>
                </div>
            </section>
        );
    }
}

export default SoftSkills;