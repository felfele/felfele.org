import React from 'react';
import { Colors } from '../data/style';
import { Ruler } from './Ruler';
import Footer from './Footer';

export const BottomPart = ({ children, ruler = true }) => (
    <div style={{
        backgroundColor: Colors.BACKGROUND_COLOR,
    }}>
        {children}
        {ruler && <Ruler/>}

        <Footer/>
    </div>
)
