import React, {ChangeEvent, useCallback} from 'react';

interface FormValues {
    [key: string]: string;
}

interface FormErrors {
    [key: string]: string;
}

export function useForm() {
    const [values, setValues] = React.useState<FormValues>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues((prevValues) => ({...prevValues, [name]: value}));
    };

    return {values, handleChange, setValues};
}

export function useFormWithValidation() {
    const [values, setValues] = React.useState<FormValues>({});
    const [errors, setErrors] = React.useState<FormErrors>({});
    const [isValid, setIsValid] = React.useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues((prevValues) => ({...prevValues, [name]: value}));
        setErrors((prevErrors) => ({...prevErrors, [name]: target.validationMessage}));
        setIsValid((target.closest('form') as HTMLFormElement).checkValidity());
    };

    const resetForm = useCallback(
        (newValues: FormValues = {}, newErrors: FormErrors = {}, newIsValid: boolean = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {values, handleChange, errors, isValid, resetForm};
}