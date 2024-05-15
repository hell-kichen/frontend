import React from 'react';
import styles from './style.module.css';

interface LinkComponentProps{
    href: string;
    title: string;
    isActive: boolean;
}

export default function LinkComponent({href, title, isActive}: LinkComponentProps) {
    return(
        <a className={isActive ? `${styles.link} ${styles.active}` : styles.link} href={href}>
            {title}
        </a>
    );
}