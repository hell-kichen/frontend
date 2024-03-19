import React from 'react';
import styles from './style.module.css';

export default function Title({children} : {children: React.ReactNode}){
    return(
        <h1 className={styles.title}>
            {children}
        </h1>
    );
}