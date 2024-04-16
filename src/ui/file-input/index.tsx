import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import styles from './style.module.css';

interface FileInputProps {
    label: string;
    onChange: (file: string | ArrayBuffer | null) => void;
    file?: string | ArrayBuffer | null;
    className?: string;
}

export default function FileInput({ label, onChange, file = null, className }: FileInputProps) {
    const [currentFile, setCurrentFile] = useState<string | ArrayBuffer | null>(file);
    const fileInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (file !== currentFile) {
            setCurrentFile(file);
        }
    }, [file]);

    const getBase64 = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setCurrentFile(reader.result);
            onChange(reader.result);
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    };

    return (
        <div className={`${styles.container} ${className}`}>
            <label className={styles.label}>
                {label}
            </label>
            <input
                className={styles.fileInput}
                type='file'
                ref={fileInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files && e.target.files[0];
                    if (file) {
                        getBase64(file);
                    }
                }}
            />
            <div
                onClick={() => {
                    if (fileInput.current) {
                        fileInput.current.click();
                    }
                }}
                className={styles.button}
                role='button'
            >
                Выбрать файл
            </div>
            {currentFile && typeof currentFile === 'string' && (
                <div className={styles.image} style={{ backgroundImage: `url(${currentFile})` }} />
            )}
        </div>
    );
}