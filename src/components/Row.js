import React from 'react';
import { useMediaQuery } from 'react-responsive'

import {
    CONTENT_MAX_WIDTH,
    PADDING_SIZE_CSS_EXPRESSION,
    WIDTH_THRESHOLD
} from '../data/style';

export const Row = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: WIDTH_THRESHOLD })
    console.log('Row', {isTabletOrMobile});
    return (
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: PADDING_SIZE_CSS_EXPRESSION,
            maxWidth: CONTENT_MAX_WIDTH,
            flex: 1,
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            justifyContent: 'space-between',
            alignItems: isDesktop ? 'normal' : 'center',
        }}>
            {children}
        </div>

    )
}
