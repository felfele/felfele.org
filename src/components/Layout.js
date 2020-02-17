import React from 'react';

import '../styles/styles.css';
import '../styles/fonts.css';
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
            maxWidth: 1160,
            fontFamily: 'Nunito Sans',
            color: 'black',
            paddingRight: 10,
            paddingLeft: 10,
        };

        const finalStyle = {
            ...defaultStyle,
            ...importedStyle,
        };
        return (
            <div style={{ margin: -8 }}>
                <div style={finalStyle}><Navbar/></div>
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
