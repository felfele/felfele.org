import React from 'react'

export const Illustration = ({src, style, ...rest}) => (
    <img src={src} style={{
        ...style,
    }}
    {...rest}
    />
)
