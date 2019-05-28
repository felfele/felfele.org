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
        </Link>
    );
}
