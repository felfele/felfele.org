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
                <div style={sectionContentStyle}>
                    <SectionLink link="/niche" style={sectionLinkStyle}>
                        Niche app
                    </SectionLink>
                    <SectionLink link="/lab" style={sectionLinkStyle}>
                        Felfele Lab
                    </SectionLink>
                </div>
            </div>

            <div style={sectionContainerStyle}>
                <div style={sectionTitleStyle}>CONTRIBUTE</div>
                <div style={sectionContentStyle}>
                    <SectionLink link='https://github.com/felfele' style={sectionLinkStyle} target='_new'>
                        Github
                    </SectionLink>
                    <SectionLink link="/donate" style={sectionLinkStyle}>
                        Make a donation
                    </SectionLink>
                </div>
            </div>

            <div style={sectionContainerStyle}>
                <div style={sectionTitleStyle}>FOUNDATION</div>
                <div style={sectionContentStyle}>
                    <SectionLink link='/about' style={sectionLinkStyle}>
                        About &amp; contact
                    </SectionLink>
                </div>
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
