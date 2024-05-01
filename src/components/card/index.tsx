import styles from './style.module.css';
import { Button, LinkComponent, Icons } from '../../ui'
import { useState, useContext } from "react";
import { AuthContext } from '../../contexts'

interface Author {
    id: string;
    first_name: string;
    last_name: string;
}

interface CardProps {
    name?: string;
    id: string;
    image: string;
    is_favourited: boolean;
    is_in_shopping_cart: boolean;
    tags: string[] | null;
    cooking_time: number;
    author: Author;
    handleLike?: (args: { id: string; toLike: number }) => void;
    handleAddToCart?: (args: { id: string; toAdd: number; callback: () => void }) => void;
    updateOrders?: () => void;
}

export default function Card({
                                 name = 'Без названия',
                                 id,
                                 image,
                                 is_favourited,
                                 is_in_shopping_cart,
                                 cooking_time,
                                 author,
                                 handleLike,
                                 handleAddToCart,
                                 updateOrders
                             }: CardProps) {
    const authContext = useContext(AuthContext);

    return (
        <div className={styles.card}>
            <LinkComponent
                className={styles.card__title}
                href={`/recipes/${id}`}
                title={<div className={styles.card__image} style={{ backgroundImage: `url(${image})` }} />}
            />
            <div className={styles.card__body}>
                <LinkComponent
                    className={styles.card__title}
                    href={`/recipes/${id}`}
                    title={name}
                />
                <div className={styles.card__time}>
                    <Icons.ClockIcon /> {cooking_time} мин.
                </div>
                <div className={styles.card__author}>
                    <Icons.UserIcon />{' '}
                    <LinkComponent
                        href={`/user/${author.id}`}
                        title={`${author.first_name} ${author.last_name}`}
                        className={styles.card__link}
                    />
                </div>
            </div>

            <div className={styles.card__footer}>
                {authContext && (
                    <Button
                        btnStyle={styles.card__add}
                        modifier={is_in_shopping_cart ? 'btnLight' : 'btnBlue'}
                        disabled={!authContext}
                    >
                        {is_in_shopping_cart ? (
                            <>
                                <Icons.DoneIcon />
                                Рецепт добавлен
                            </>
                        ) : (
                            <>
                                <Icons.PlusIcon />
                                Добавить в покупки
                            </>
                        )}
                    </Button>
                )}

                {authContext && (
                    <Button
                        modifier="style_none"
                    >
                        {is_favourited ? <Icons.StarActiveIcon /> : <Icons.StarIcon />}
                    </Button>
                )}
            </div>
        </div>
    );
}