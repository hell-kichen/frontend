import React, {useEffect, useState} from 'react';
import styles from './style.module.css';
import {recipesApi} from '../../shared/api';
import {CardList} from '../../modules';
import {Card} from '../../components';
import {Container, Main, Title} from "../../ui";
import useRecipes from "../../utils/use-recipes";

const MainPage = ({updateOrders}: { updateOrders: any }) => {
    const {
        recipes,
        setRecipes,
        recipesCount,
        setRecipesCount,
        recipesPage,
        setRecipesPage,
        tagsValue,
        setTagsValue,
        handleTagsChange,
        handleLike,
        handleAddToCart
    } = useRecipes()

    useEffect(() => {
        recipesApi.getRecipes({}).then((resp) => {
            setRecipes(resp.results);
            setRecipesCount(resp.count)
        }).catch((error) => {
            console.error('Ошибка при получении списка рецептов:', error);
        });
    }, []);

    return (
        <Main>
            <Container>
                <title className={styles.title}>
                    <Title>Рецепты</Title>
                </title>
                <meta name="description" content="Продуктовый помощник - Рецепты"/>
                <meta property="og:title" content="Рецепты"/>
                <CardList>
                    {Array.isArray(recipes) && recipes.map((recipe) =>
                        (<Card
                            key={recipe.id}
                            {...recipe}
                        />))}
                </CardList>
            </Container>
        </Main>
    );
};

export default MainPage;
