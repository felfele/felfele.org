import React from 'react';
import Fade from 'react-reveal/Fade';
import 'hamburgers/dist/hamburgers.css';
import '../styles/hamburger-settings.css';

export class OverlayMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false
        };
    }

    openReactMobileMenu = () => {
        this.setState(prevState => ({
            menuIsOpen: !prevState.menuIsOpen
        }));
    }

    render() {
        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        };
        return (
            <Fade duration={2000}>
                <button
                    style={{
                        margin: 0,
                        padding: 0,
                        height: '42px',
                        outline: 'none',
                        display: 'flex',
                    }}
                    onClick={this.openReactMobileMenu}
                    className={`hamburger hamburger--spin ${this.state.menuIsOpen &&
                        'is-active'}`}
                    type='button'
                >
                    <span className='hamburger-box'>
                        <span  style={{color: 'white'}}  className='hamburger-inner' style={{ zIndex: 99999 }} />
                    </span>
                    {this.state.menuIsOpen &&
                    <div
                        style={{
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            backgroundSize: 'cover',
                            backgroundColor: 'black',
                            opacity: 0.8,
                        }}
                        className={'open'}
                    >
                        <Fade duration={500} left cascade>
                            <ul
                                style={{
                                    color: 'white',
                                    listStyle: 'none',
                                    margin: '5rem',
                                    fontWeight: 100,
                                    fontSize: '3rem',
                                    lineHeight: '4rem',
                                }}
                            >
                                <li>
                                    <a style={linkStyle} href='/'>
                                        Mission
                                    </a>
                                </li>
                                <li>
                                    <a style={linkStyle} href='/team'>
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a style={linkStyle} href='/donate'>
                                        Donate
                                    </a>
                                </li>
                                <li>
                                    <a style={linkStyle} href='/contact'>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a style={linkStyle} href='/blog'>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </Fade>
                    </div>}
                </button>
            </Fade>
        );
    }
}
