import styles from './style.module.css';
import {CheckBox} from "../../ui";

interface CheckboxItem {
    id: string;
    value: boolean;
    name: string;
    color?: string;
}

interface CheckboxGroupProps {
    label?: string;
    values: CheckboxItem[];
    handleChange: (id: string, value: boolean) => void;
    className?: string;
    labelClassName?: string;
    tagsClassName?: string;
    checkboxClassName?: string;
}

export default function CheckboxGroup({
                                          label,
                                          values = [],
                                          handleChange,
                                          className = '',
                                          labelClassName = '',
                                          tagsClassName = '',
                                          checkboxClassName = ''
                                      }: CheckboxGroupProps) {
    return (
        <div className={`${styles.checkboxGroup} ${className}`}>
            {label && (
                <div className={`${styles.label} ${labelClassName}`}>
                    {label}
                </div>
            )}
            <div className={`${styles.checkboxGroupItems} ${tagsClassName}`}>
                {values.map(item => (
                    <CheckBox
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        name={item.name}
                        color={item.color}
                        onChange={() => handleChange(item.id, !item.value)}
                        className={checkboxClassName}
                    />
                ))}
            </div>
        </div>
    );
}