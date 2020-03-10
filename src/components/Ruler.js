import React from 'react';

import { VERTICAL_PADDING } from '../data/style.js'

export const Ruler = ({style}) => (
    <div style={{
            height: 1,
            maxWidth: 1160,
            marginTop: VERTICAL_PADDING,
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItem: 'center',
            backgroundColor: 'rgba(128, 128, 128, 0.25)',
            ...style,
        }}
    />
)
