import React from 'react';
import { Link } from 'gatsby';

export const UniversalLink = (props) => {
    const { link, ...rest } = props;
    if (/^\/(?!\/)/.test(props.link)) {
        return (
            <InternalLink link={props.link} {...rest}/>
        )
    } else {
        return (
            <WeblinkWrapper link={props.link} {...rest}/>
        )
    }
}

const ExternalLink = (props) => {
    const { style, children, ...rest } = props;
    return (
        <a
            style={{
                textDecoration: 'none',
                boxShadow: 'none',
                ...style,
            }}
            {...rest}
        >
            {children}
        </a>
    );
}

export const Button = (props) => {
    if (/^\/(?!\/)/.test(props.link)) {
        return (
            <InternalLink link={props.link}>
                <InnerButton {...props}/>
            </InternalLink>
        )
    } else {
        return (
            <WeblinkWrapper link={props.link}>
                <InnerButton {...props}/>
            </WeblinkWrapper>
        )
    }
}

const InnerButton = ({ icon, label, border, style }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                wrap: 'no-wrap',
                border: border ? 'solid 1px rgba(98, 0, 234, 0.25)' : '',
                padding: border ? 12 : 0,
                fontWeight: 600,
                margin: 6,
                fontSize: 16,
                ...style,
            }}
        >
            <img src={icon} height={16} style={{ paddingRight: 4, margin: 0, color: '#6200EA' }}/>
            {label}
        </div>
    );
}

const WeblinkWrapper = (props) => {
    return (
        <ExternalLink href={props.link}>
            {props.children}
        </ExternalLink>
    )
}

const InternalLink = (props) => {
    return (
        <Link
            to={props.link}
            style={{
                textDecoration: 'none',
                boxShadow: 'none',
                ...props.style,
        }}>
            {props.children}
        </Link>
    )
}
