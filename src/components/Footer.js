import React from 'react';
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive';

import Logo from '../assets/images/felfele-icon.svg';
import { Colors, CONTENT_MAX_WIDTH, VERTICAL_PADDING } from '../data/style';
import Menu from './Menu';

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
                <Link to='/'>
                    <img height={40} src={Logo} style={{ marginBottom: 0, fill: '#000000' }}/>
                </Link>
            </div>
        </div>
    )
}

export const Footer = ({}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return (
        <footer style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : '',
            fontSize: 12,
            paddingTop: VERTICAL_PADDING,
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: CONTENT_MAX_WIDTH,
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
                    <Menu
                        sectionContainerStyle={{
                            ...styles.sectionContainer,
                            paddingTop: isMobile ? 20 : 0,
                        }}
                        sectionTitleStyle={styles.sectionTitle}
                        sectionContentStyle={styles.sectionContent}
                    />
                    {
                        !isMobile && <LogoContainer isMobile={isMobile} />
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;

const styles = {
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        paddingBottom: 20,
    },
    sectionContent: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.5,
    },
    sectionTitle: {
        paddingBottom: 5,
        fontFamily: 'Jost',
        fontWeight: 500,
    },
};
