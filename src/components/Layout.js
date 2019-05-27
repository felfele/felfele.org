import React from 'react';

import { rhythm } from '../utils/typography';
import Navbar from './Navbar';
import Footer from './Footer';
import { Ruler } from './Ruler';

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        const importedStyle = this.props.style;
        const defaultStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 10,
            maxWidth: rhythm(36),
        };

        const finalStyle = {
            ...defaultStyle,
            ...importedStyle,
        };
        return (
            <div>
                <div style={finalStyle}><Navbar/></div>
                <Ruler/>
                <div style={finalStyle}>
                    {children}
                </div>
                <Ruler/>
                <div style={finalStyle}><Footer/></div>
            </div>

        );
    }
}

export default Layout;
