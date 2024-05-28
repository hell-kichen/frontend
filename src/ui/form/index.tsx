import React, {ReactNode} from 'react';
import styles from './style.module.css';

interface FormProps {
    loggedIn?: boolean;
    className?: string;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    children: ReactNode;
}

export default function Form({ loggedIn, children, className, onSubmit }: FormProps) {
    return (
        <form
            className={`${styles.form} ${className ? className : ''}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
}