import React from 'react';
import styles from './style.module.css';

interface ButtonProps {
    isPressed?: boolean;
    children: React.ReactNode;
    btnStyle?: any;
    modifier?: any;
    btnClick?: () => void;
    href?: string;
    disabled?: boolean;
}

export default function Button({ children, isPressed, btnStyle="btnLight", btnClick, href }: ButtonProps) {

    const styleMap: Record<string, string> = {
        'btnLight': styles.btnLight,
        'btnBlue': styles.btnBlue,
        'btnLightUnsub': styles.btnLightUnsub
    };

    const btnClass = `${styles.btn} ${styleMap[btnStyle]}`;
    if (href) {
        return (
            <a href={href} className={`${btnClass} ${isPressed ? styles.btnPressed : ''}`} onClick={btnClick}>
                { children }
            </a>
        );
    }
    return (
        <button className={`${btnClass} ${isPressed ? styles.btnPressed : ''}`} onClick={btnClick}>
            { children }
        </button>
    );
}