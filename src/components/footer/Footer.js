import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                {/*<div className="app-footer-disclaimer">*/}
                    <span>TIMOTHY IS CURRENTLY</span>
                    <code className="availability">NOT AVAILABLE</code>
                    <span>FOR HIRE</span>
                {/*</div>*/}

                {/*<div className="app-footer-find-me">*/}
                    <a href="https://www.linkedin.com/in/tim-claassens/" className="app-footer-icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/daftfox/" className="app-footer-icon">
                        <i className="fab fa-github"></i>
                    </a>

                    <a href="mailto:tim.claassens@gmail.com" className="app-footer-icon">
                        <i className="fas fa-envelope"></i>
                    </a>
                {/*</div>*/}
            </footer>
        );
    }
}

export default Footer;