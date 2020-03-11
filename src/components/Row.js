import React from 'react';

import {
    CONTENT_MAX_WIDTH,
    VERTICAL_PADDING,
} from '../data/style';

export const Row = ({children, paddingTop}) => (
    <div
        className='grid'
        style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: paddingTop || VERTICAL_PADDING,
            maxWidth: CONTENT_MAX_WIDTH,
            flex: 1,
            display: 'flex',
        }}
    >{children}
    </div>
)
