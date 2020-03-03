import React, { Component, Fragment } from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'gatsby';

import { Menu } from './Menu';
import { Colors } from '../data/style';
import Logo from './../assets/images/felfele-logo.svg'
import MobileMenuImage from '../assets/mobileMenu.svg';
import MobileCloseImage from '../assets/mobileClose.svg';

export class MobileMenu extends Component {
    state = {
        open: false,
    };

    openModal = () => {
        this.setState({ open: true });
    };

    closeModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { title } = this.props;
        return (
            <Fragment>
                <Modal
                    open={this.state.open}
                    onClose={this.closeModal}
                    showCloseIcon={false}
                    styles={{
                        overlay: {
                            padding: 0,
                            margin: 0,
                        },
                        modal: {
                            flex: 1,
                            flexDirection: 'row',
                            margin: 0,
                            padding: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: Colors.BACKGROUND_COLOR,
                        },
                    }}
                >

                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90,
                            paddingLeft: 20,
                            paddingRight: 20,
                            borderBottomColor: Colors.MOBILE_MENU_SEPARATOR,
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
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

                        <img
                            src={MobileCloseImage}
                            alt='Close menu'
                            onClick={this.closeModal}
                        />

                    </div>

                    <div
                        style={{
                        }}
                    >
                        <Menu
                            sectionContainerStyle={{
                                paddingTop: 22,
                                paddingBottom: 22,
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: Colors.MOBILE_MENU_SEPARATOR,
                                borderBottomWidth: 1,
                                borderBottomStyle: 'solid',
                            }}
                            sectionTitleStyle={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: Colors.MOBILE_MENU_TITLE,
                            }}
                            sectionContentStyle={{
                                paddingTop: 10,
                                fontSize: 18,
                                color: 'black',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                            sectionLinkStyle={{
                                paddingTop: 6,
                                paddingBottom: 6,
                            }}
                        />
                    </div>

                </Modal>
                <img
                    src={MobileMenuImage}
                    alt={title}
                    onClick={this.openModal}
                />
            </Fragment>
        );
    }
}

export default MobileMenu;
