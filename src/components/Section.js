import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'gatsby-image';

import { Button } from './Button';
import { WIDTH_THRESHOLD } from '../data/style';

const H3 = ({ children, style }) => (
    <h3 style={{
        fontSize: 21,
        fontFamily: 'Jost',
        marginTop: 0,
        marginBottom: 5,
        ...style,
    }}>{children}</h3>
)

const P = ({ children, style }) => (
    <p style={{
        marginTop: 0,
        marginBottom: 0,
        ...style,
    }}>{children}</p>
)

export const Section = ({ title, body }) => (
    <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '80vw',
    }}>
        <H3>{title}</H3>
        <P>{body}</P>
    </div>
)

export const SectionSeparator = () => <div style={{
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
}}></div>

export const SectionWithImageAndLink = ({ title, text, image, link, label }) => {
    const isMobile = useMediaQuery({ maxWidth: WIDTH_THRESHOLD })
    const marginLeft = isMobile ? 20 : 0;
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 540,
            alignItems: 'flex-start',
        }}>
            {image &&
                <Image
                    fluid={image}
                    style={{
                        width: isMobile ? '100vw' : '40vw',
                        maxWidth: 540,
                        height: 'auto',
                        marginBottom: 15,
                    }}
                />
            }
            <div style={{
                paddingBottom: 20,
                marginLeft,
            }}>
                <H3>{title}</H3>
                <P>{text}</P>
            </div>
            <Button link={link} label={label} border={true} style={{
                marginLeft,
            }} />
        </div>
    )
}
