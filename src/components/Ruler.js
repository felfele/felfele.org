import React from 'react';

import { PADDING_SIZE_CSS_EXPRESSION } from '../data/style.js'

export const Ruler = () => (
    <div style={{
            height: 1,
            maxWidth: 1160,
            marginTop: PADDING_SIZE_CSS_EXPRESSION,
            marginLeft: 'auto',
            marginRight: 'auto',
            alignItem: 'center',
            backgroundColor: 'rgba(128, 128, 128, 0.25)',
        }}
    />
)
