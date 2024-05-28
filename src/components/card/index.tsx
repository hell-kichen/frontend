import styles from './style.module.css';
import {Button, Icons, LinkComponent} from '../../ui';
import {TagsContainer} from "../../components";
import {useContext} from "react";
import {AuthContext} from '../../contexts'


interface CardProps {
    name?: string,
    id: string,
    image?: string,
    is_favorited?: boolean,
    tags: [],
    is_in_shopping_cart?: boolean,
    cooking_time?: number,
    author: {
        id: string,
        first_name: string,
        last_name: string,
    }
}

export default function Card({
                                 name = 'Без названия',
                                 id,
                                 image,
                                 tags,
                                 is_favorited,
                                 is_in_shopping_cart,
                                 cooking_time,
                                 author

                             }: CardProps) {
    const authContext = useContext(AuthContext);

    return (
        <div className={styles.card}>
            <LinkComponent
                className={styles.card__title}
                href={`/recipes/${id}`}
                title={<div className={styles.card__image} style={{backgroundImage: `url(${image})`}}/>}
            />
            <div className={styles.card__body}>
                <LinkComponent
                    className={styles.card__title}
                    href={`/recipes/${id}`}
                    title={name}
                />
                <TagsContainer tags={tags}/>
                <div className={styles.card__time}>
                    <Icons.ClockIcon/> {cooking_time} мин.
                </div>
                <div className={styles.card__author}>
                    <Icons.UserIcon/>{' '}
                    <LinkComponent
                        href={`/user/${author.id}`}
                        title={`${author.first_name} ${author.last_name}`}
                        className={styles.card__link}
                    />
                </div>
            </div>

            <div className={styles.card__footer}>
                <Button
                    btnStyle="btnLight"
                    modifier={is_in_shopping_cart ? 'btnLight' : 'btnBlue'}
                    disabled={!authContext}
                >
                    <>
                        <Icons.PlusIcon/>
                        Добавить в покупки
                    </>
                </Button>

                {authContext && (
                    <Button
                        modifier="style_none"
                    >
                        {is_favorited ? <Icons.StarActiveIcon/> : <Icons.StarIcon/>}
                    </Button>
                )}
            </div>
        </div>
    );
}