import React, { Fragment } from 'react';
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
            target="_new"
        >
            {children}
        </a>
    );
}

export const Button = (props) => {
    const {link, style, border, ...rest} = props
    const linkStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        border: border ? 'solid 1px rgb(0, 0, 0)' : '',
        padding: border ? 12 : 0,
        fontWeight: 700,
        fontSize: 14,
        ...style,
    }
    const className = border ? 'button' : undefined
    if (/^\/(?!\/)/.test(link)) {
        return (
            <InternalLink className={className} link={link} style={linkStyle}>
                <InnerButton {...rest}/>
            </InternalLink>
        )
    } else {
        return (
            <WeblinkWrapper className={className} link={link} style={linkStyle}>
                <InnerButton {...rest}/>
            </WeblinkWrapper>
        )
    }
}

const InnerButton = ({ icon, label }) => {
    return (
        <Fragment>
            <img src={icon} height={16} style={{ paddingRight: 4, margin: 0, color: '#000000' }}/>
            {label}
        </Fragment>
    );
}

const WeblinkWrapper = (props) => {
    const { link, children, ...rest } = props;
    return (
        <ExternalLink className={props.className} href={link} {...rest}>
            {children}
        </ExternalLink>
    )
}

const InternalLink = (props) => {
    return (
        <Link
            className={props.className}
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
