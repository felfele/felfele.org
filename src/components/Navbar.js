import React from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive'
// import font file
import 'typeface-nunito-sans';

import Logo from './../assets/images/felfele-logo.svg'
import Phone from './../assets/baseline-smartphone-24-px.svg'
import { Button } from './Button';
import { CONTENT_MAX_WIDTH, MIN_SECTION_PADDING } from '../data/style';
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
                paddingLeft: MIN_SECTION_PADDING,
                paddingRight: MIN_SECTION_PADDING,
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
                    height: 40,
                    marginTop: '4vmax',
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
                    <img src={Logo} style={{ width: 118, marginBottom: 0, fill: textColor }}/>
                </Link>
                {isMobile
                ?
                    <MobileMenu />
                :
                    <div
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
                                fontWeight: 500,
                                fontFamily: 'Jost',
                                color: textColor,
                            }}
                        />
                        <Button
                            icon={Tool}
                            link='/lab'
                            label='LAB'
                            style={{
                                fontWeight: 500,
                                fontFamily: 'Jost',
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
