import React from 'react';
import { useMediaQuery } from 'react-responsive'

import {
    CONTENT_MAX_WIDTH,
    PADDING_SIZE_CSS_EXPRESSION,
    WIDTH_THRESHOLD
} from '../data/style';

export const Row = ({children, paddingTop}) => {
    const isMobile = useMediaQuery({ maxWidth: WIDTH_THRESHOLD })
    const mobileStyle = isMobile
        ? {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
        : undefined
    console.log('Row', {mobileStyle})
    return (
        <div
            className="grid"
            style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: paddingTop || PADDING_SIZE_CSS_EXPRESSION,
                maxWidth: CONTENT_MAX_WIDTH,
                flex: 1,
                display: 'flex',
                ...mobileStyle,
            }}
        >
            {children}
        </div>

    )
}
