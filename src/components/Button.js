import React from 'react';
import { Link } from 'gatsby';

export const Button = ({ icon, label, target, border }) => {
    return (
        <Link to={target}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    border: border ? 'solid 1px rgba(98, 0, 234, 0.25)' : '',
                    padding: 12,
                    margin: 8,
                    lineHeight: 0,
                    fontSize: 16,
                }}
            >
                <img src={icon} height={16} style={{ paddingRight: 4, margin: 0, color: '#6200EA' }}/>
                {label}
            </div>
        </Link>
    );
}

export const ButtonWithBorder = ({ icon, label, target }) => {
    return (
        <div
            style={{
                border: 'solid 1px rgba(98, 0, 234, 0.25)',
                padding: 12,
                margin: 8,
                lineHeight: 0,
                fontSize: 16,
            }}
        >
        </div>
    );
}
