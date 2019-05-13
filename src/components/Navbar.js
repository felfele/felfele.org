import React, { Component } from 'react';
import { Link } from 'gatsby';
// import font file
import 'typeface-roboto';

import Logo from './../assets/images/icon-white-transparent.png'
import { OverlayMenu } from './OverlayMenu';
import { menu } from '../data/menu';

const WIDTH_THRESHOLD = 650;

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
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
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
                        maxWidth: '56rem',
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
                        <img src={Logo} style={{ width: 70, height: 70, marginBottom: 0 }}/>
                        <div style={{
                            fontFamily: 'Roboto',
                            fontSize: this.state.width > WIDTH_THRESHOLD ? 24 : 20,
                            fontWeight: 500,
                            whiteSpace: 'nowrap'
                        }}>
                            Felfele Foundation
                        </div>
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
                color: '#FFFFFF',
                paddingRight: 10,
            }}
        />
    );
};
