import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
// import font file
import 'typeface-nunito-sans';

import Logo from './../assets/Felfele_Horizontal.svg'
import Phone from './../assets/baseline-smartphone-24-px.svg'
import { Button } from './Button';
import { CONTENT_MAX_WIDTH } from '../data/style';
import MobileMenu from './MobileMenu';
import HamburgerImage from '../assets/hamburger.png';

const Navbar = () => {
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
                        color: '#FFFFFF',
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={Logo} style={{ width: 100, marginBottom: 0, fill: '#000000' }}/>
                </Link>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                    }}
                >
                {
                    isMobile
                    ? <MobileMenu src={HamburgerImage} />
                    : <Fragment>
                        <Button
                            icon={Phone}
                            link='/niche'
                            label='NICHE'
                            style={{
                                fontWeight: 600,
                            }}
                        />
                        <Button
                            link='/lab'
                            label='LAB'
                            style={{
                                fontWeight: 600,
                            }}
                        />
                    </Fragment>
                }
                </div>
            </div>
        </div>
    )
}

export default Navbar;
