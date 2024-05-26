import React from 'react';
import styles from './style.module.css';
import {AccountMenu} from '../../modules';
import {Nav} from "../../components"
import {Container} from '../../ui';

interface HeaderProps {
    loggedIn: boolean;
    onSignOut: () => void;
}

export default function Header({loggedIn, onSignOut}: HeaderProps) {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContent}>
                    <Nav loggedIn={loggedIn}/>
                    <AccountMenu onSignOut={onSignOut}/>
                </div>
            </Container>
        </header>
    );
};

