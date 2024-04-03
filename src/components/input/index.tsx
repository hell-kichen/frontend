import React, { useEffect, useState, ChangeEvent, FocusEvent } from 'react';
import styles from './style.module.css';

interface InputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    type?: string;
    inputClassName?: string;
    labelClassName?: string;
    className?: string;
    name?: string;
    required?: boolean;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    value?: string;
}

export default function Input({
                                  onChange,
                                  label,
                                  type = 'text',
                                  inputClassName,
                                  labelClassName,
                                  className,
                                  name,
                                  required,
                                  onFocus,
                                  onBlur,
                                  value = ''
                              }: InputProps) {
    const [inputValue, setInputValue] = useState(value);

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onChange(e);
    };

    useEffect(() => {
        if (value !== inputValue) {
            setInputValue(value);
        }
    }, [value]);

    // Функция для объединения классов
    const mergeClasses = (...classes: (string | undefined)[]) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <div className={mergeClasses(styles.input, className)}>
            <label className={styles.inputLabel}>
                {label && (
                    <div className={mergeClasses(styles.inputLabelText, labelClassName)}>
                        {label}
                    </div>
                )}
                <input
                    type={type}
                    required={required}
                    name={name}
                    className={mergeClasses(styles.inputField, inputClassName)}
                    onChange={handleValueChange}
                    onFocus={onFocus}
                    value={inputValue}
                    onBlur={onBlur}
                />
            </label>
        </div>
    );
}