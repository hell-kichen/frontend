import React from 'react';
import styles from './style.module.css';

export default function Footer() {
    const footerClass : string = `${styles.footer}`;

    return(
       <footer className={footerClass}>
           Продуктовый помощник
       </footer>
    );
}