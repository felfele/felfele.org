import React from 'react';

import {
    CONTENT_MAX_WIDTH,
    VERTICAL_PADDING,
    MIN_SECTION_PADDING,
} from '../data/style';

export const Row = ({children, paddingTop}) => (
    <div
        className='grid'
        style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: MIN_SECTION_PADDING,
            paddingRight: MIN_SECTION_PADDING,
            paddingTop: paddingTop || VERTICAL_PADDING,
            maxWidth: CONTENT_MAX_WIDTH,
            flex: 1,
            display: 'flex',
        }}
    >{children}
    </div>
)
