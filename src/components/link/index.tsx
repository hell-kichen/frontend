import React from 'react';
import styles from './style.module.css';

interface LinkComponentProps{
    href: string;
    title: string;
}

export default function LinkComponent({href, title}: LinkComponentProps) {
    return(
        <a className={styles.link} href={href}>
            {title}
        </a>
    );
}