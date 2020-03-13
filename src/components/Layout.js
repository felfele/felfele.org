import React, { Fragment } from 'react';

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
            fontFamily: 'Nunito Sans',
            color: 'black',
        };

        const finalStyle = {
            ...defaultStyle,
            ...importedStyle,
        };
        return (
            <Fragment>
                <Navbar/>
                {children}
                <Ruler/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Layout;
