import React from 'react';
import styles from './style.module.css';

interface LinkComponentProps {
    className?: any;
    href: string;
    title: any;
}

export default function LinkComponent({href, title, className}: LinkComponentProps) {
    return (
        <a className={`${styles.link} ${className}`} href={href}>
            {title}
        </a>
    );
}