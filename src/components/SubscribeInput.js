import React, { useState, Fragment } from 'react'
import Modal from 'react-modal';

import {
    Colors,
    CONTENT_MAX_WIDTH,
    MIN_SECTION_PADDING,
} from '../data/style'
import { subscribeEmail, isEmail } from '../utils/subscribe'
import CloseDialog from '../assets/mobileClose.svg'
import BalloonImage from '../assets/pop_confirm.svg'
import ErrorImage from '../assets/popup_error.svg'

import '../styles/loader.css'

Modal.setAppElement('body')

const modalData = {
    none: {
        isModal: false,
        text: () => '',
    },
    success: {
        isModal: true,
        image: BalloonImage,
        title: 'Thanks for subscribing!',
        text: (email) => <Fragment>
            We’ve added <b>{email}</b> to our private mailing list.
            We’re looking forward to share exciting news with you!
        </Fragment>,
    },
    error: {
        isModal: true,
        image: ErrorImage,
        title: 'Something went wrong...',
        text: (email) => <Fragment>
            We couldn’t add your email <b>{email}</b> to our private mailing list.
            Please try again, we’re sorry!
        </Fragment>,
    }
}

const Loader = () => (
    <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
    </div>
)

const SubscribeModal =({modal, closeModal, email}) => (
    <Modal
        isOpen={modal.isModal}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        shouldReturnFocusAfterClose={false}
        style={{
            content: {
                width: 640,
                maxWidth: '87.5vw',
                position: 'unset',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderRadius: 0,
                borderWidth: 0,
                padding: 20,
                margin: 20,
            },
            overlay: {
                zIndex: 99,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }}
    >
        <img
            src={CloseDialog}
            alt='Close dialog'
            onClick={closeModal}
            style={{
                alignSelf: 'flex-end',
            }}
        />
        { modal.image &&
            <img
                src={modal.image}
                height={68}
            />
        }
        <h1
            style={{
                paddingTop: 38,
                margin: 0,
                fontSize: 36,
                fontFamily: 'Nunito Sans',
            }}
        >{modal.title}</h1>
        <p
            style={{
                margin: 0,
                paddingTop: 7,
                fontSize: 21,
            }}
        >
            {modal.text(email)}
        </p>
        <p
            style={{
                fontSize: 14,
                margin: 0,
                paddingTop: 86,
            }}
        >
        In the meantime, feel free to reach out on <a href='mailto:hello@felfele.org'>hello@felfele.org</a>
        </p>
    </Modal>
)

// buttonState = 'inactive' | 'clickable' | 'spinner' | 'clicked'

export const SubscribeInput = ({
    id,
    style,
    inputStyle,
    buttonStyle,
    disabledButtonStyle,
    label = 'Subscribe',
}) => {
    const [buttonState, setButtonState] = useState('inactive')
    const calculatedButtonStyle = buttonState === 'clickable'
        ? undefined
        : {
            cursor: 'not-allowed',
            color: 'gray',
            ...disabledButtonStyle,
        }
    const buttonTitle = buttonState === 'clickable'
        ? undefined
        : 'Please enter your email address to subscribe'

    const [modal, setModal] = useState(modalData.none)
    const closeModal = () => setModal(modalData.none)

    const [email, setEmail] = useState('')
    const buttonLabel = buttonState === 'inactive'
        ? label
        : buttonState === 'clickable'
            ? label
            : buttonState === 'spinner'
                ? <Loader />
                : 'Subscribed!'
    return (
        <div
            style={{
                maxWidth: Math.floor(CONTENT_MAX_WIDTH * 0.6),
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                ...style,
            }}
        >
            <SubscribeModal
                closeModal={closeModal}
                modal={modal}
                email={email}
            />
            <input
                className='subscribe'
                style={{
                    borderColor: Colors.NICHE_PINK,
                    backgroundColor: Colors.BACKGROUND_COLOR,
                    borderStyle: 'solid',
                    borderBottomLeftRadius: 9,
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                    borderTopWidth: 1,
                    borderRightWidth: 0,
                    maxWidth: '80vw',
                    minWidth: 160,
                    flex: 0.7,
                    padding: 0,
                    margin: 0,
                    paddingLeft: MIN_SECTION_PADDING,
                    fontFamily: 'Karla',
                    fontSize: 18,
                    color: '#000000',
                    ...inputStyle,
                }}
                placeholder='Your email address'
                inputMode='email'
                onChange={(e) => (buttonState == 'inactive' || buttonState == 'clickable') &&
                    setButtonState(
                        isEmail(e.target.value)
                        ? 'clickable'
                        : 'inactive'
                    )
                }
                disabled={buttonState == 'clicked'}
                id={id}
            />
            <div
                className='subscribe'
                style={{
                    maxWidth: '10vw',
                    minWidth: 100,
                    fontFamily: 'Karla',
                    fontSize: 18,
                    backgroundColor: Colors.NICHE_PINK,
                    color: 'white',
                    border: 'none',
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    flex: 0.3,
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    ...buttonStyle,
                    ...calculatedButtonStyle,
                }}
                title={buttonTitle}
                onClick={async () => {
                    if (buttonState == 'clickable') {
                        setButtonState('spinner')
                        const elem = document.getElementById(id)
                        const email = elem.value
                        setEmail(email)
                        const returnValue = await subscribeEmail(id)
                        setButtonState('clicked')
                        setModal(modalData[returnValue])
                    }
                }}
            >{buttonLabel}</div>
        </div>
    )
}

