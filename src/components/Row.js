import React from 'react';
import { useMediaQuery } from 'react-responsive'

import {
    CONTENT_MAX_WIDTH,
    QUERY_FOR_MOBILE_AND_TABLET,
    PADDING_SIZE_CSS_EXPRESSION
} from '../data/style';

export const Row = ({children}) => {
    const isTabletOrMobile = useMediaQuery({ query: QUERY_FOR_MOBILE_AND_TABLET })
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
            flexDirection: isTabletOrMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isTabletOrMobile ? 'center' : 'normal',
        }}>
            {children}
        </div>

    )
}
