import React, { Fragment } from 'react';
import { Colors } from '../data/style';
import { Ruler } from './Ruler';
import Footer from './Footer';
import { SubscribeFooter } from './SubscribeFooter';

export const BottomPart = ({ children, ruler = true }) => (
    <Fragment>
        <div style={{
            backgroundColor: Colors.BACKGROUND_COLOR,
        }}>
            {children}
            {ruler && <Ruler/>}

            <Footer/>
        </div>
        <SubscribeFooter/>
    </Fragment>
)
