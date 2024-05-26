import {useEffect, useState} from 'react';
import {Button, Container, Icons, LinkComponent, Main} from "../../ui";
import {TagsContainer} from "../../components";
import Description from "./description";
import Ingredients from "./ingredients";
import styles from "./style.module.css";
import {recipesApi} from '../../shared/api';

export default function SingleCard() {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    const [recipe, setRecipe] = useState<any>([]);

    useEffect(() => {
        recipesApi.getRecipeByID({recipeID: id}).then((resp) => {
            setRecipe(resp);
            console.log(resp);
        }).catch((error) => {
            console.error('Ошибка при получении рецепта:', error);
        });
    }, []);
    const {
        author = {},
        image,
        tags,
        cooking_time,
        name,
        ingredients,
        text,
        is_favorited,
        is_in_shopping_cart
    } = recipe;

    return (
        <Main>
            <Container>
                <title>{name}</title>
                <meta name="description" content={`Продуктовый помощник - ${name}`}/>
                <meta property="og:title" content={name}/>
                <div className={styles['single-card']}>
                    <img src={image} alt={name} className={styles["single-card__image"]}/>
                    <div className={styles["single-card__info"]}>
                        <div className={styles["single-card__header-info"]}>
                            <h1 className={styles["single-card__title"]}>{name}</h1>
                            <Button
                                modifier='style_none'
                            >
                                {is_favorited ? <Icons.StarBigActiveIcon/> : <Icons.StarBigIcon/>}
                            </Button>
                        </div>
                        <TagsContainer tags={tags}/>
                        <div>
                            <p className={styles['single-card__text']}><Icons.ClockIcon/> {cooking_time} мин.</p>
                            <p className={styles['single-card__text_with_link']}>
                                <div className={styles['single-card__text']}>
                                    <Icons.UserIcon/> <LinkComponent
                                    title={`${author.first_name} ${author.last_name}`}
                                    href={`/user/${author.id}`}
                                    className={styles['single-card__link']}
                                />
                                </div>
                            </p>
                        </div>
                        <div className={styles['single-card__buttons']}>
                            <Button
                                btnStyle="btnBlue"
                                modifier={is_in_shopping_cart ? 'style_light' : 'style_dark-blue'}
                            ><>
                                <Icons.PlusIcon stroke="#fff"/> Добавить в покупки
                            </>
                            </Button>
                            <Button
                                btnStyle="btnLight"
                                modifier='style_light-blue'
                            >
                                Подписаться на автора
                            </Button>
                        </div>
                        <Ingredients ingredients={ingredients}/>
                        <Description description={text}/>
                    </div>
                </div>
            </Container>
        </Main>
    )
}