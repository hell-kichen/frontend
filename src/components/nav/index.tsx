import React from 'react';
import styles from './style.module.css';
import {LinkComponent} from '../../ui';
import navigation from '../../configs/navigation';

interface NavProps {
    loggedIn: boolean;
}

export default function Nav ({loggedIn}: NavProps) {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container}>
                <ul className={styles.nav__items}>
                    {navigation.map(item => {
                        if (!loggedIn && item.auth) {
                            return null;
                        }

                        const isActive = window.location.pathname === item.href || (window.location.pathname === '/' && item.href === '/recipes');
                        const itemClassName = isActive ? `${styles.nav__item} ${styles.nav__item_active}` : styles.nav__item;

                        return (
                            <li className={itemClassName} key={item.href}>
                                <LinkComponent
                                    title={item.title}
                                    href={item.href}
                                    className={styles.nav__link}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};