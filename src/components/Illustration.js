import React from 'react'

export const Illustration = ({src, style}) => (
    <img src={src} style={{
        width: '80vw',
        ...style,
    }} />
)
