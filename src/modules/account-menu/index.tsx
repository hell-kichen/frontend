import styles from './style.module.css'
import {useContext} from 'react'
import {Button, LinkComponent} from '../../ui'
import {AuthContext} from '../../contexts'


interface AccountMenuProps {
    onSignOut: () => void;
}

export default function AccountMenu({onSignOut}: AccountMenuProps) {
    const authContext = useContext(AuthContext)
    if (!authContext) {
        return <div className={styles.menu}>
            <LinkComponent
                className={styles.menuLink}
                href='/signin'
                title='Войти'
            />
            <Button
                href='/signup'
                btnStyle="btnBlue"
            >
                Создать аккаунт
            </Button>
        </div>
    }
    return <div className={styles.menu}>
        <LinkComponent
            className={styles.menuLink}
            href='/change-password'
            title='Изменить пароль'
        />
        <a
            className={styles.menuLink}
            onClick={onSignOut}
        >
            Выход
        </a>
    </div>
}
