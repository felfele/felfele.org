import React from 'react'

export const Illustration = ({src, style, ...rest}) => (
    <img src={src} style={{
        width: '80vw',
        ...style,
    }}
    {...rest}
    />
)
