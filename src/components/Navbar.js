import React, { Component } from 'react';
import { Link } from 'gatsby';
// import font file
import 'typeface-nunito-sans';
import { rhythm } from '../utils/typography';

import Logo from './../assets/Felfele_Horizontal.svg'
import { OverlayMenu } from './OverlayMenu';
import { menu } from '../data/menu';

export const WIDTH_THRESHOLD = 650;

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: rhythm(36),
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 80,
                        maxWidth: rhythm(40),
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
                        <img src={Logo} style={{ width: 100, marginBottom: 0, fill: '#6200EA' }}/>
                    </Link>
                    {this.state.width > WIDTH_THRESHOLD ?
                    <div
                        style={{
                            maxWidth: 400,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingRight: 10,
                        }}
                    >
                        {Object.keys(menu).map(key => {
                            const item = menu[key];
                            if (item) {
                                return <MenuLink to={item.path}>{item.label}</MenuLink>;
                            }
                        })}
                    </div> :
                    <OverlayMenu/>
                    }
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
                paddingRight: 10,
            }}
        />
    );
};
