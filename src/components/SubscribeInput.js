import React from 'react'

import {
    Colors,
    CONTENT_MAX_WIDTH,
    VERTICAL_HALF_PADDING,
    MIN_SECTION_PADDING,
} from '../data/style'
import { subscribeEmail } from '../utils/subscribe'


export const SubscribeInput = ({
    id,
    style,
    inputStyle,
    buttonStyle,
    label = 'Subscribe',
    height = 43,
}) => (
    <div
        // className='layout'
        style={{
            maxWidth: Math.floor(CONTENT_MAX_WIDTH * 0.6),
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            ...style,
        }}
    >
        <input
            style={{
                borderColor: Colors.NICHE_PINK,
                backgroundColor: Colors.BACKGROUND_COLOR,
                borderStyle: 'solid',
                borderBottomLeftRadius: 9,
                borderTopLeftRadius: 9,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderTopWidth: 1,
                borderRightWidth: 0,
                height,
                maxWidth: '80vw',
                minWidth: 160,
                flex: 0.7,
                padding: 0,
                margin: 0,
                paddingLeft: MIN_SECTION_PADDING,
                fontFamily: 'Karla',
                fontSize: 18,
                color: '#000000',
                ...inputStyle,
            }}
            placeholder='Your email address'
            id={id}
        />
        <div
            style={{
                maxWidth: '10vw',
                minWidth: 100,
                height: height + 2,
                fontFamily: 'Karla',
                fontSize: 18,
                backgroundColor: Colors.NICHE_PINK,
                color: 'white',
                border: 'none',
                borderBottomRightRadius: 9,
                borderTopRightRadius: 9,
                cursor: 'pointer',
                flex: 0.3,
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                ...buttonStyle,
            }}
            onClick={() => subscribeEmail(id)}
        >{label}</div>
    </div>
)
