import React from 'react';
import styles from './style.module.css';

interface LinkComponentProps{
    className: any;
    href: string;
    title: any;
}

export default function LinkComponent({href, title}: LinkComponentProps) {
    return(
        <a className={styles.link} href={href} title="">
            {title}
        </a>
    );
}