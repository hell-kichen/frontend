import React from 'react';
import styles from './style.module.css';
import routes from "../../configs/navigation";
import LinkComponent from "../link";
import { useLocation } from 'react-router-dom';

interface NavProps {
    auth: boolean;
    currentPath: string;
}

export default function Nav({auth, currentPath}: NavProps) {
    const location = useLocation()
    return (
        <nav>
            {routes.map((route, index) => {
                if (route.auth && !auth) {
                    return null;
                }
                return (
                    <LinkComponent
                        key={index}
                        href={route.href}
                        title={route.title}
                        isActive={location.pathname === '/active-page' && route.href === '/active-page'}
                    />
                );
            })}
        </nav>
    );
}