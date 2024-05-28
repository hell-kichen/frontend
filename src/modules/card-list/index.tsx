import styles from './style.module.css'
import React from "react";

interface CardListProps {
    children: React.ReactNode
}

export default function CardList({children}: CardListProps) {
    return <div className={styles.cardList}>
        {children}
    </div>
}