import React, { Fragment } from 'react';
import { UniversalLink } from './Button';

export const Menu = (props) => {
    const {
        sectionContainerStyle,
        sectionTitleStyle,
        sectionContentStyle,
        sectionLinkStyle,
    } = props;
    return (
        <Fragment>
            <div style={sectionContainerStyle}>
                <div style={sectionTitleStyle}>PRODUCT</div>
                <nav style={sectionContentStyle}>
                    <SectionLink link="/niche" style={sectionLinkStyle}>
                        Niche app
                    </SectionLink>
                    <SectionLink link="/lab" style={sectionLinkStyle}>
                        Felfele Lab
                    </SectionLink>
                </nav>
            </div>

            <div style={sectionContainerStyle}>
                <div style={sectionTitleStyle}>CONTRIBUTE</div>
                <nav style={sectionContentStyle}>
                    <SectionLink link='https://github.com/felfele' style={sectionLinkStyle} target='_new'>
                        Github
                    </SectionLink>
                    <SectionLink link="/donate" style={sectionLinkStyle}>
                        Make a donation
                    </SectionLink>
                </nav>
            </div>

            <div style={sectionContainerStyle}>
                <div style={sectionTitleStyle}>FOUNDATION</div>
                <nav style={sectionContentStyle}>
                    <SectionLink link='/' style={sectionLinkStyle}>
                        Mission
                    </SectionLink>
                    <SectionLink link='/about' style={sectionLinkStyle}>
                        About &amp; contact
                    </SectionLink>
                </nav>
            </div>
        </Fragment>
    );
}

export default Menu;

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
