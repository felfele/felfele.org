import React from 'react';
import { Colors } from '../data/style';

export const BottomPart = ({ children }) => (
    <div style={{
        backgroundColor: Colors.BACKGROUND_COLOR,
    }}>
        {children}
    </div>
)
