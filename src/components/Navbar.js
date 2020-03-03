import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
// import font file
import 'typeface-nunito-sans';

import Logo from './../assets/images/felfele-logo.svg'
import Phone from './../assets/baseline-smartphone-24-px.svg'
import { Button } from './Button';
import { CONTENT_MAX_WIDTH } from '../data/style';
import MobileMenu from './MobileMenu';
import Tool from '../assets/tool.svg';

const Navbar = ({textColor = '#000000'}) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: 20,
                paddingRight: 20,
                maxWidth: CONTENT_MAX_WIDTH,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 90,
                }}
            >
                <Link
                    to='/'
                    style={{
                        color: textColor,
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={Logo} style={{ width: 100, marginBottom: 0, fill: textColor }}/>
                </Link>
                {
                    isMobile
                    ? <MobileMenu />
                    : <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingRight: 10,
                        }}
                    >
                        <Button
                            icon={Phone}
                            link='/niche'
                            label='NICHE'
                            style={{
                                fontWeight: 600,
                                color: textColor,
                            }}
                        />
                        <Button
                            icon={Tool}
                            link='/lab'
                            label='LAB'
                            style={{
                                fontWeight: 600,
                                color: textColor,
                                paddingLeft: 30,
                            }}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;
