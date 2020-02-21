import React from 'react';
import Image from 'gatsby-image';
import { Button } from './Button';

export const Section = ({ title, body }) => (
    <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 370,
    }}>
        <h3 style={{
            fontSize: 21,
            fontFamily: 'Jost',
            marginBottom: 12,
        }}>
            {title}
        </h3>
        <p>{body}</p>
    </div>
)

export const SectionSeparator = () => <div style={{
    width: 40,
    height: 40,
}}></div>

export const SectionWithImageAndLink = ({ title, text, image, link, label }) => (
    <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 560,
        alignItems: 'flex-start',
    }}>
        {image &&
            <Image
                fluid={image}
                style={{
                    width: '100vw',
                    maxWidth: 560,
                    height: 'auto',
                    marginBottom: 20,
                }}
            />
        }
        <div style={{
            paddingBottom: 20,
        }}>
            <h3 style={{
                fontSize: 21,
                fontFamily: 'Jost',
                marginBottom: 12,
            }}>
                {title}
            </h3>
            <p>{text}</p>
        </div>
        <Button link={link} label={label} border={true} style={{
        }} />
    </div>
)
