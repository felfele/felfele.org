import React, { Component } from 'react';
import { Link } from 'gatsby';

import { rhythm } from './../utils/typography';
import Logo from './../assets/images/icon-white-transparent.png'

export class Navbar extends Component {
    render() {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#6200EA',
                    height: 80,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginLeft: `${rhythm(1.5)}`,
                        marginRight: `${rhythm(1.5)}`,
                        maxWidth: '56rem',
                    }}
                >
                    <Link
                        to='/'
                        style={{
                            textShadow: 'none',
                            backgroundImage: 'none',
                            color: '#FFFFFF',
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={Logo} style={{ width: 70, height: 70, marginBottom: 0 }}/>
                        <div style={{ fontFamily: 'Roboto', fontSize: 24, fontWeight: 500 }}>
                            Felfele Foundation
                        </div>
                    </Link>
                    <div
                        style={{
                            width: rhythm(24),
                            maxWidth: 400,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <MenuLink to={'/'}>Mission</MenuLink>
                        <MenuLink to={'/team'}>Team</MenuLink>
                        <MenuLink to={'/donate'}>Donate</MenuLink>
                        <MenuLink to={'/contact'}>Contact</MenuLink>
                        <MenuLink to={'/blog'}>Blog</MenuLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

const MenuLink = props => {
    return (
        <Link
            {...props}
            style={{
                color: '#FFFFFF',
            }}
        />
    );
};
