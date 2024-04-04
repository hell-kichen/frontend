import React, {useState, useEffect, ChangeEvent} from 'react';
import styles from './style.module.css';

interface TextareaProps {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    textareaClassName?: string;
    labelClassName?: string;
    value?: string;
}

export default function Textarea({
                                     onChange,
                                     label,
                                     textareaClassName,
                                     labelClassName,
                                     value = ''
                                 }: TextareaProps) {
    const [inputValue, setInputValue] = useState(value);

    const handleValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onChange(e);
    };

    useEffect(() => {
        if (value !== inputValue) {
            setInputValue(value);
        }
    }, [value]);

    return (
        <div className={styles.textarea}>
            <label className={`${styles.textareaLabel} ${labelClassName}`}>
                <div className={styles.textareaLabelText}>
                    {label}
                </div>
                <textarea
                    rows={8}
                    value={inputValue}
                    className={`${styles.textareaField} ${textareaClassName}`}
                    onChange={handleValueChange}
                />
            </label>
        </div>
    );
}