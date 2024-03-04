import React from 'react';
import styles from './style.module.css';

interface ButtonProps {
    isPressed?: boolean;
    children: React.ReactNode;
    btnStyle?: 'btnLight' | 'btnBlue';
    btnClick?: () => void;
}

export default function Button({ children, isPressed, btnStyle = 'btnLight', btnClick }: ButtonProps) {
    let btnClass = styles.btn;

    if (btnStyle === 'btnLight') {
        btnClass += ` ${styles.btnLight}`;
    } else if (btnStyle === 'btnBlue') {
        btnClass += ` ${styles.btnBlue}`;
    }

    return (
        <button className={`${btnClass} ${isPressed ? styles.btnPressed : ''}`} onClick={btnClick}>
            { children }
        </button>
    );
}