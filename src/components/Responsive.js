import React from 'react'

export const MobileOnly = ({children, style}) => <div className='mobile-only' style={style}>{children}</div>
export const DesktopOnly = ({children, style}) => <div className='desktop-only' style={style}>{children}</div>
