import React, { Component } from 'react';
import { WIDTH_THRESHOLD } from './Navbar';
import Logo from '../assets/logo.svg';
import { UniversalLink } from './Button';
import { APP_STORE_LINK, PLAY_STORE_LINK } from '../pages/app';

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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: this.state.width > WIDTH_THRESHOLD ? '' : 'center',
                fontSize: 12,
                paddingTop: 40,
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: 1200,
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
                    paddingBottom: 50,
                }}>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>PRODUCT</div>
                        <div style={styles.sectionContent}>
                            <SectionLink link={APP_STORE_LINK} target='_new'>
                                Download for iOS
                            </SectionLink>
                            <SectionLink link={PLAY_STORE_LINK} target='_new'>
                                Download for Android
                            </SectionLink>
                            <SectionLink link={'mailto:support@felfele.com'}>Support</SectionLink>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>CONTRIBUTE</div>
                        <div style={styles.sectionContent}>
                            <SectionLink link="/donate">
                                Make a donation
                            </SectionLink>
                            <SectionLink link="/volunteer">
                                Volunteer
                            </SectionLink>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>DEVELOPERS</div>
                        <div style={styles.sectionContent}>
                            <SectionLink link='https://github.com/felfele' target='_new'>
                                Github
                            </SectionLink>
                            <SectionLink link='https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md' target='_new'>
                                Guidelines
                            </SectionLink>
                            <SectionLink link='https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md' target='_new'>
                                Code of Conduct
                            </SectionLink>
                            <SectionLink link='https://gitter.im/felfele/purple-lounge' target='_new'>
                                Gitter
                            </SectionLink>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>ABOUT US</div>
                        <div style={styles.sectionContent}>
                            <SectionLink link="/contact">
                                Contact
                            </SectionLink>
                            <SectionLink link="/">
                                Mission
                            </SectionLink>
                            <SectionLink link="/team">
                                Core team
                            </SectionLink>
                            <SectionLink link="/blog">
                                Blog
                            </SectionLink>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={styles.sectionTitle}>LEGAL</div>
                        <div style={styles.sectionContent}>
                            <SectionLink link="https://ariregister.rik.ee/index?lang=eng">
                                Public Records
                            </SectionLink>
                            <SectionLink link="/privacy">
                                Privacy Policy
                            </SectionLink>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={{
                            width: this.state.width > WIDTH_THRESHOLD ? 200 : 100,
                            marginTop: this.state.width > WIDTH_THRESHOLD ? 0 : 20,
                            display: 'flex',
                            justifyContent: this.state.width > WIDTH_THRESHOLD ? 'flex-end' : 'center',
                        }}>
                            <img width={23} src={Logo} style={{ marginBottom: 0, fill: '#6200EA' }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

const SectionLink = (props) => {
    const { style, ...rest } = props;
    return (
        <UniversalLink
            style={{
                fontWeight: 600,
                ...style,
            }}
            {...rest}
        />
    );
};

const styles = {
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    sectionContent: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1.5,
    },
    sectionTitle: {
        paddingBottom: 5,
    },
};
