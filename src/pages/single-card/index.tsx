import {useContext, useEffect, useState} from 'react';
import {Button, Container, Icons, LinkComponent, Main} from "../../ui";
import {TagsContainer} from "../../components";
import Description from "./description";
import Ingredients from "./ingredients";
import styles from "./style.module.css";
import {recipesApi} from '../../shared/api';
import {AuthContext, UserContext} from "../../contexts";
import {useParams} from "react-router-dom";
import TagsContainer from "../../components/tags-container";
import useRecipe from "../../utils/use-recipe";

interface Props {
    updateOrders: any;
}

// @ts-ignore
export default function SingleCard({updateOrders}: Props) {
    const url = window.location.pathname;
    // const id = url.substring(url.lastIndexOf('/') + 1);

    const authContext = useContext(AuthContext)
    const userContext = useContext(UserContext)

    const {id} = useParams();

    const {
        recipe,
        setRecipe,
        handleLike,
        handleAddToCart,
        handleSubscribe
    } = useRecipe()

    // const [recipe, setRecipe] = useState<any>([]);

    useEffect(() => {
        recipesApi.getRecipeByID({recipeID: id ? id : ""}).then((resp) => {
            // @ts-ignore
            setRecipe(resp);
            console.log(resp);
        }).catch((error) => {
            console.error('Ошибка при получении рецепта:', error);
        });
    }, []);
    // @ts-ignore
    // @ts-ignore
    const {
        author = {
            id: undefined,
            first_name: undefined,
            last_name: undefined,
        },
        image,
        tags,
        cooking_time,
        name,
        ingredients,
        text,
        is_favorited,
        is_in_shopping_cart
    } = recipe;

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
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
                            {authContext && <Button
                                modifier='style_none'
                            >
                                {is_favorited ? <Icons.StarBigActiveIcon/> : <Icons.StarBigIcon/>}
                            </Button>}
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
                                {(userContext || {}).id === author.id && <LinkComponent
                                    href={`${url}/edit`}
                                    title='Редактировать рецепт'
                                    className={styles['single-card__edit']}
                                />}
                            </p>
                        </div>
                        <div className={styles['single-card__buttons']}>
                            {authContext && <Button
                                btnStyle="btnBlue"
                                modifier={is_in_shopping_cart ? 'style_light' : 'style_dark-blue'}
                                btnClick={() => {
                                    handleAddToCart({
                                        id: id ? id : "",
                                        toAdd: Number(!is_in_shopping_cart),
                                        callback: updateOrders
                                    })
                                }}
                            ><>
                                <Icons.PlusIcon stroke="#fff"/> Добавить в покупки
                            </>
                            </Button>}
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