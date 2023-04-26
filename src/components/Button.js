import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

{/* CSS classes that automatically get applied */}
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({
    children,
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {
        {/* If button component have a button style, then have it just be the button style created for it
            If not true then have it be default styles */}
        const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        return (
            <Link to='/sign-up' className='btn-mobile'>
                <button 
                className={'btn ${checkButtonStyle ${checkButtonSize}'}
                onClick={onClick}
                type={type}
                >
                    {/*Whatever you place inside the button, it'll render it */}
                    {children}
                </button>
            </Link>
        )
    }; 