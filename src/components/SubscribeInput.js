import React, { useState } from 'react'

import {
    Colors,
    CONTENT_MAX_WIDTH,
    VERTICAL_HALF_PADDING,
    MIN_SECTION_PADDING,
} from '../data/style'
import { subscribeEmail, isEmail } from '../utils/subscribe'


export const SubscribeInput = ({
    id,
    style,
    inputStyle,
    buttonStyle,
    label = 'Subscribe',
}) => {
    const [isButtonEnabled, setButtonEnabled] = useState(false)
    const disabledButtonStyle = isButtonEnabled
        ? undefined
        : {
            cursor: 'not-allowed',
            color: 'gray',
        }
    const buttonTitle = isButtonEnabled
        ? undefined
        : 'Please enter your email address to subscribe'
    return (
        <div
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
                className='subscribe'
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
                inputMode='email'
                onChange={(e) => setButtonEnabled(isEmail(e.target.value))}
                id={id}
            />
            <div
                className='subscribe'
                style={{
                    maxWidth: '10vw',
                    minWidth: 100,
                    fontFamily: 'Karla',
                    fontSize: 18,
                    backgroundColor: Colors.NICHE_PINK,
                    color: 'white',
                    border: 'none',
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    flex: 0.3,
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    ...disabledButtonStyle,
                    ...buttonStyle,
                }}
                title={buttonTitle}
                onClick={() => isButtonEnabled && subscribeEmail(id)}
            >{label}</div>
        </div>
    )
}

