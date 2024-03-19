import React from "react";
import styles from './style.module.css';
import Icons from '../icons';

interface CheckboxProps {
    onChange?: (id: string) => void;
    className?: string;
    color?: string;
    value?: boolean;
    name: string;
    id: string;
}

export default function Checkbox({onChange, className, color, value = false, name, id}: CheckboxProps) {
    const clickHandler = () => {
        onChange && onChange(id);
    };

    const classNames = `${styles.checkbox} ${className ?? ''} ${
        value ? styles.checkbox_active : ''
    } ${
        color === 'orange' ? styles.checkbox_radius_orange :
            color === 'green' ? styles.checkbox_radius_green :
                color === 'purple' ? styles.checkbox_radius_purple :
                    ''
    }`;

    return (
        <div className={styles['checkbox-container']}>
            <button
                className={classNames}
                onClick={clickHandler}
                style={{backgroundColor: value ? color : undefined}}
                type='button'
            >
                {value ? <Icons.CheckIcon/> : ''}
            </button>
            <span>{name}</span>
        </div>
    );
}