import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                By Alex Savenok
                            </p>
                            <p>
                                <a className="icon" href="https://github.com/4z5lz/react-show-finder">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
        );
    }
};

export default Footer;