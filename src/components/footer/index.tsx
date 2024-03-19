import React from 'react';
import styles from './style.module.css';
import LinkComponent from '../link';

export default function Footer() {

    return(
        <footer className={styles.footer}>
            <LinkComponent href='#' title='Прoдуктовый помощник'/>
        </footer>
    );
}