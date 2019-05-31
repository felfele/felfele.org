import React from 'react';
import { Link } from 'gatsby';

export const Button = (props) => {
    if (/^\/(?!\/)/.test(props.target)) {
        return (
            <LinkWrapper target={props.target}>
                <InnerButton {...props}/>
            </LinkWrapper>
        )
    } else {
        return (
            <WeblinkWrapper target={props.target}>
                <InnerButton {...props}/>
            </WeblinkWrapper>
        )
    }
}

const InnerButton = ({ icon, label, target, border }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                wrap: 'no-wrap',
                border: border ? 'solid 1px rgba(98, 0, 234, 0.25)' : '',
                padding: border ? 12 : 0,
                margin: 6,
                fontSize: 16,
            }}
        >
            <img src={icon} height={16} style={{ paddingRight: 4, margin: 0, color: '#6200EA' }}/>
            {label}
        </div>
    );
}

const WeblinkWrapper = (props) => {
    return (
        <a href={props.target}>
            {props.children}
        </a>
    )
}

const LinkWrapper = (props) => {
    return (
        <Link to={props.target}>
            {props.children}
        </Link>
    )
}
