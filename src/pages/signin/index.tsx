import styles from './style.module.css';
import {Container, Input, Title, Main, Form, Button, LinkComponent} from '../../ui';
import {useFormWithValidation} from '../../utils';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";

export default function SignIn() {
    const signUp = () => {
        console.log("Работает")
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <Main>
            <Container>
                <title>Войти на сайт</title>
                <meta name="description" content="Продуктовый помощник - Войти на сайт"/>
                <meta property="og:title" content="Войти на сайт"/>
                <Title>Войти на сайт</Title>
                <Form
                    className={styles.form}
                    onSubmit={signUp}>
                    <Input
                        required
                        label='Имя пользователя'
                        type='name'
                        name='name'
                        onChange={handleChange}/>
                    <Input
                        required
                        label='Пароль'
                        type='password'
                        name='password'
                        onChange={handleChange}/>
                    <div className={styles.Mid}>
                        <Button
                            btnStyle="btnBlue">
                            Войти
                        </Button>
                        <LinkComponent className={styles.Info} href="/change-password" title="Забыли пароль?"/>
                    </div>
                </Form>
            </Container>
        </Main>
    );
};