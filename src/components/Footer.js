import React from 'react';
import { Link } from 'gatsby'

import Logo from '../assets/images/felfele-icon.svg';
import { Colors, CONTENT_MAX_WIDTH, VERTICAL_PADDING, MIN_SECTION_PADDING, VERTICAL_HALF_PADDING } from '../data/style';
import Menu from './Menu';
import { MobileOnly, DesktopOnly } from './Responsive'

const LogoContainer = ({isMobile}) => {
    return (
        <div
            style={{
                ...styles.sectionContainer,
                flexGrow: 0.5,
                alignItems: isMobile ? 'center' : 'flex-end'
           }}
        >
                <Link to='/'>
                    <img height={40} src={Logo} style={{ marginBottom: 0, fill: '#000000' }}/>
                </Link>
        </div>
    )
}

export const Footer = ({}) => {
    return (
        <footer
            className='footer'
            style={{
                display: 'flex',
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
                    justifyContent: 'space-between',
                }}
            >
                <MobileOnly>
                    <LogoContainer isMobile={true} />
                </MobileOnly>

                <Menu
                    sectionContainerStyle={styles.sectionContainer}
                    sectionTitleStyle={styles.sectionTitle}
                    sectionContentStyle={styles.sectionContent}
                />

                <DesktopOnly
                    style={{
                        flexGrow: 0.5,
                    }}
                >
                    <LogoContainer isMobile={false} />
                </DesktopOnly>

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
        paddingBottom: 8,
        fontFamily: 'Jost',
        fontWeight: 500,
    },
};
