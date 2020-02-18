import React, { Component } from 'react';
import { WIDTH_THRESHOLD } from '../data/style';
import Logo from '../assets/logo.svg';
import { UniversalLink } from './Button';
import { Colors } from '../data/style';
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
                backgroundColor: Colors.BACKGROUND_COLOR,
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
                    paddingBottom: 50,
                }}>
                    <div style={{
                        display: 'flex',
                        flex: 0.6,
                        justifyContent: 'space-between',
                        flexDirection: this.state.width > WIDTH_THRESHOLD ? 'row' : 'column',
                    }}>
                        <div style={styles.sectionContainer}>
                            <div style={styles.sectionTitle}>PRODUCT</div>
                            <div style={styles.sectionContent}>
                                <SectionLink link="/niche">
                                    Niche app
                                </SectionLink>
                                <SectionLink link="/lab">
                                    Felfele Lab
                                </SectionLink>
                            </div>
                        </div>
                        <div style={styles.sectionContainer}>
                            <div style={styles.sectionTitle}>CONTRIBUTE</div>
                            <div style={styles.sectionContent}>
                                <SectionLink link='https://github.com/felfele' target='_new'>
                                    Github
                                </SectionLink>
                                <SectionLink link="/donate">
                                    Make a donation
                                </SectionLink>
                            </div>
                        </div>
                        <div style={styles.sectionContainer}>
                            <div style={styles.sectionTitle}>FOUNDATION</div>
                            <div style={styles.sectionContent}>
                                <SectionLink link='/about'>
                                    About &amp; contact
                                </SectionLink>
                                <SectionLink link='https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md' target='_new'>
                                    Code of Conduct
                                </SectionLink>
                            </div>
                        </div>
                    </div>
                    <div style={styles.sectionContainer}>
                        <div style={{
                            width: this.state.width > WIDTH_THRESHOLD ? 200 : 100,
                            marginTop: this.state.width > WIDTH_THRESHOLD ? 0 : 20,
                            display: 'flex',
                            justifyContent: this.state.width > WIDTH_THRESHOLD ? 'flex-end' : 'center',
                        }}>
                            <img width={23} src={Logo} style={{ marginBottom: 0, fill: '#000000' }}/>
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
                fontWeight: 500,
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
        fontFamily: 'Jost',
        fontWeight: 100,
    },
};
