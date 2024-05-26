import { Container, Input, Title, Main, Form, Button } from '../../ui'
import styles from './style.module.css'

export default function ChangePassword() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return(
        <Main>
            <Container>
                    <title>Изменить пароль</title>
                    <meta name="description" content="Продуктовый помощник - Изменить пароль" />
                    <meta property="og:title" content="Изменить пароль" />
                <Title>Изменить пароль</Title>
                <Form
                    className={styles.form}
                    onSubmit={e => {
                        e.preventDefault()
                        console.log(e)
                    }}
                >
                    <Input
                        required
                        label='Старый пароль'
                        type='password'
                        name='current_password'
                        onChange={handleChange}
                    />
                    <Input
                        required
                        label='Новый пароль'
                        type='password'
                        name='new_password'
                        onChange={handleChange}
                    />
                    <div className={styles.Info}>
                        <p>Ваш пароль не должен совпадать с вашим именем или другой персональной информацией или быть слишком похожим на неё.</p>
                        <p>Ваш пароль должен содержать как минимум 8 символов.</p>
                        <p>Ваш пароль не может быть одним из широко распространённых паролей.</p>
                        <p>Ваш пароль не может состоять только из цифр.</p>
                    </div>
                    <Input
                        required
                        label='Подтверждение нового пароля'
                        type='password'
                        name='repeat_password'
                        onChange={handleChange}
                    />
                    <Button
                        btnStyle='btnBlue'
                    >
                        Изменить пароль
                    </Button>
                </Form>
            </Container>
        </Main>
    );
}