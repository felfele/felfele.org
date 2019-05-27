import React, { Component } from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { WIDTH_THRESHOLD } from './Navbar';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div style={styles.rootContainer}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
                    paddingBottom: 50,
                }}>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>PRODUCT</div>
                        <div style={styles.sectionContent}>
                            <Link to="/donate">
                                Download for iOS
                            </Link>
                            <a href='https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md' target='_new'>
                                Download for Android
                            </a>
                            <a href={'mailto:support@felfele.com'}>Support</a>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>CONTRIBUTE</div>
                        <div style={styles.sectionContent}>
                            <Link to="/donate">
                                Make a donation
                            </Link>
                            <Link to="/volunteer">
                                Volunteer
                            </Link>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>DEVELOPERS</div>
                        <div style={styles.sectionContent}>
                            <a href='https://github.com/felfele' target='_new'>
                                Github
                            </a>
                            <a href='https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md' target='_new'>
                                Guidelines
                            </a>
                            <a href='https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md' target='_new'>
                                Code of Conduct
                            </a>
                            <a href='https://gitter.im/felfele/purple-lounge' target='_new'>
                                Gitter
                            </a>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>ABOUT US</div>
                        <div style={styles.sectionContent}>
                            <Link to="/">
                                Mission
                            </Link>
                            <Link to="/team">
                                Core team
                            </Link>
                            <Link to="/blog">
                                Blog
                            </Link>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>LEGAL</div>
                        <div style={styles.sectionContent}>
                            <a href="https://ariregister.rik.ee/index?lang=eng">
                                Public Records
                            </a>
                            <Link to="/privacy">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

const styles = {
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        paddingTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(36),
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    sectionContent: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 600
    },
    sectionTitle: {
        paddingBottom: 5,
    },
};
