import React, { Fragment } from 'react';
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive';

import Logo from '../assets/images/felfele-icon.svg';
import { Colors, CONTENT_MAX_WIDTH, VERTICAL_PADDING, MIN_SECTION_PADDING, VERTICAL_HALF_PADDING } from '../data/style';
import Menu from './Menu';

const LogoContainer = ({isMobile}) => {
    return (
        <div style={{
            ...styles.sectionContainer,
            flexGrow: 0.5,
            alignItems: isMobile ? 'center' : 'flex-end'
        }}>
                <Link to='/'>
                    <img height={40} src={Logo} style={{ marginBottom: 0, fill: '#000000' }}/>
                </Link>
        </div>
    )
}

export const Footer = ({}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return (
        <footer
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: isMobile ? 'center' : 'unset',
                fontSize: 12,
                paddingTop: VERTICAL_PADDING,
                paddingBottom: VERTICAL_HALF_PADDING,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: MIN_SECTION_PADDING,
                paddingRight: MIN_SECTION_PADDING,
                maxWidth: CONTENT_MAX_WIDTH,
                backgroundColor: Colors.BACKGROUND_COLOR,
            }}
        >
            <div
                className='footer'
                style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: isMobile ? 'center' : 'flex-start',
                    justifyContent: 'space-between',
                }}
            >
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
        </footer>
    );
}

export default Footer;

const styles = {
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'inherit',
        padding: 0,
        paddingBottom: 20,
    },
    sectionContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'inherit',
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
