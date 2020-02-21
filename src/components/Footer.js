import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Logo from '../assets/logo.svg';
import { UniversalLink } from './Button';
import { Colors } from '../data/style';

const LogoContainer = ({isMobile}) => {
    return (
        <div style={{
            ...styles.sectionContainer,
            flex: 0.7,
        }}>
            <div style={{
                minWidth: isMobile ? 100 : 200,
                marginTop: isMobile ? 20 : 0,
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'flex-end',
            }}>
                <img width={23} src={Logo} style={{ marginBottom: 0, fill: '#000000' }}/>
            </div>
        </div>
    )
}

export const Footer = ({}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    console.log('Footer', {isMobile})
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : '',
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
                flexDirection: isMobile ? 'column' : 'row',
                paddingBottom: 50,
            }}>
                <div style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: isMobile ? 'column' : 'row',
                }}>
                    {
                        isMobile && <LogoContainer isMobile={isMobile} />
                    }
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
                    {
                        !isMobile && <LogoContainer isMobile={isMobile} />
                    }
                </div>
            </div>
        </div>
    );
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
