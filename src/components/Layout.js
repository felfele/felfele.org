import React from 'react';

import { rhythm } from '../utils/typography';
import Navbar from './Navbar';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        const importedStyle = this.props.style;
        const defaultStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        };

        const finalStyle = {
            ...defaultStyle,
            ...importedStyle,
        };
        return (
            <div>
                <Navbar />
                <div style={finalStyle}>
                    <br />
                    {children}
                    <Footer />
                </div>
            </div>

        );
    }
}

export default Layout;
