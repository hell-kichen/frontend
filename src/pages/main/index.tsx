import React, {useEffect, useState} from 'react';
import styles from './style.module.css';
import {recipesApi, tagsApi} from '../../shared/api';
import {CardList} from '../../modules';
import {Card} from '../../components';
import {Container, Main, Title} from "../../ui";

const MainPage = () => {
    const [recipes, setRecipes] = useState<any>([]);
    const [tags, setTagsValue] = useState<any>([]);

    useEffect(() => {
        recipesApi.getRecipes({}).then((resp) => {
            setRecipes(resp.results);
        }).catch((error) => {
            console.error('Ошибка при получении списка рецептов:', error);
        });
    }, []);

    useEffect(() => {
        tagsApi.getTags().then((resp) => {
            setTagsValue(tags.map((tag: { id: string; value: boolean }) => ({...tag, value: true})))
            console.log(resp);
        }).catch((error) => {
            console.log('Ошибка при получении тэгов:', error);
        })
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
