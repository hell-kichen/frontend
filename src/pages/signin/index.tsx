import React, { useContext } from 'react'
import Main from "../../components/main";
import Title from "../../ui/title";
import Form from "../../ui/form";
import Container from "../../components/container";
import Input from "../../ui/input";
import Button from "../../ui/button";
import styles from './style.module.css'

export default function SignIn() {
    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('форма тыкнулась!');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <Main>
            <Container>
                    <title>Войти на сайт</title>
                    <meta name="description" content="Продуктовый помощник - Войти на сайт" />
                    <meta property="og:title" content="Войти на сайт" />

                <Title>
                    Войти на сайт
                </Title>
                <Form

                    className={styles.form}
                    onSubmit={e => formSubmit(e)}
                >
                    <Input
                        required
                        label='Электронная почта'
                        name='email'
                        onChange={handleChange}
                    />
                    <Input
                        required
                        label='Пароль'
                        type='password'
                        name='password'
                        onChange={handleChange}
                    />
                    <Button
                        btnStyle="btnBlue"
                    >
                        Войти
                    </Button>
                </Form>
            </Container>
        </Main>
    )
}