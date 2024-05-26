import {Button, Container, Form, Input, Main, Title} from '../../ui';
import styles from './style.module.css';
import {useFormWithValidation} from '../../utils';
import {useNavigate} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../../contexts';

interface SignUpProps {
    onSignUp?: any;
}

const SignUp = ({onSignUp}: SignUpProps) => {
    const {values, handleChange} = useFormWithValidation();
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authContext) {
            navigate('/recipes');
        }
    }, [authContext, navigate]);

    return (
        <Main>
            <Container>
                <title>Регистрация</title>
                <meta name="description" content="Продуктовый помощник - Регистрация"/>
                <meta property="og:title" content="Регистрация"/>
                <Title>Регистрация</Title>
                <Form
                    className={styles.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSignUp(values);
                    }}
                >
                    <Input
                        label="Имя"
                        name="first_name"
                        required
                        onChange={handleChange}
                    />
                    <Input
                        label="Фамилия"
                        name="last_name"
                        required
                        onChange={handleChange}
                    />
                    <Input
                        label="Имя пользователя"
                        name="username"
                        required
                        onChange={handleChange}
                    />
                    <Input
                        label="Адрес электронной почты"
                        name="email"
                        required
                        onChange={handleChange}
                    />
                    <Input
                        label="Пароль"
                        type="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    <Button
                        modifier="style_dark-blue"
                        btnStyle="btnBlue"
                    >
                        Создать аккаунт
                    </Button>
                </Form>
            </Container>
        </Main>
    );
};

export default SignUp;