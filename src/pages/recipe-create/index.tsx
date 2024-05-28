import {FormEvent, useEffect, useState} from "react";
import {IngredientsSearch} from "../../components";
import {Button, CheckBox, Container, FileInput, Form, Input, Main, Textarea, Title} from "../../ui";
import styles from "./style.module.css";
import {ingredientsApi} from '../../shared/api';
import {Ingredient} from "../../shared/api/ingredients/models";
import useTags from "../../utils/use-tags";

export default function RecipeCreate() {

    const [ingredientValue, setIngredientValue] = useState<Ingredient>({
        name: '',
        id: '',
        amount: '',
        measurement_unit: ''
    });

    const {value: tagsValue, handleChangeTags: handleChangeTags} = useTags();
    const [recipeIngredients, setRecipeIngredients] = useState<Ingredient[]>([]);
    const [showIngredients, setShowIngredients] = useState(false);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [recipeText, setRecipeText] = useState('');
    const [recipeTime, setRecipeTime] = useState('');
    const [recipeFile] = useState<File | null>(null);
    const [recipeName, setRecipeName] = useState('');
    const [breakfastChecked, setBreakfastChecked] = useState(false);
    const [lunchChecked, setLunchChecked] = useState(false);
    const [dinnerChecked, setDinnerChecked] = useState(false);

    useEffect(() => {
        ingredientsApi.getIngredients({name: ingredientValue.name})
            .then((ingredients: Ingredient[]) => {
                setIngredients(ingredients);
            })
            .catch((error: any) => {
                console.error('Ошибка при получении ингредиентов:', error);
            });
    }, [ingredientValue.name]);

    const checkIfDisabled = () => {
        return (
            recipeText === '' ||
            recipeName === '' ||
            recipeIngredients.length === 0 ||
            tagsValue.filter((item: { value: any; }) => item.value).length === 0 ||
            recipeTime === '' ||
            recipeFile === null
        );
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleFileChange = (file: string | ArrayBuffer | null) => {
        console.log('Selected file:', file);
    };

    return (
        <Main>
            <Container>
                <Title>Создать рецепт</Title>
                <Form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        label="Название рецепта"
                        onChange={e => {
                            const value = e.target.value;
                            setRecipeName(value);
                        }}
                    />
                    <div className={styles.classCheckBox}>
                        <CheckBox
                            name="Завтрак"
                            id="breakfast"
                            color="orange"
                            value={breakfastChecked}
                            onChange={(id) => setBreakfastChecked(prevState => !prevState)}
                        />
                        <CheckBox
                            name="Обед"
                            id="lunch"
                            color="green"
                            value={lunchChecked}
                            onChange={(id) => setLunchChecked(prevState => !prevState)}
                        />
                        <CheckBox
                            name="Ужин"
                            id="dinner"
                            color="purple"
                            value={dinnerChecked}
                            onChange={(id) => setDinnerChecked(prevState => !prevState)}
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <div className={styles.ingredientsInputs}>
                            <Input
                                label="Ингредиенты"
                                className={styles.ingredientsNameInput}
                                inputClassName={styles.ingredientsInput}
                                labelClassName={styles.ingredientsLabel}
                                onChange={e => {
                                    const value = e.target.value;
                                    setIngredientValue({
                                        ...ingredientValue,
                                        name: value
                                    });
                                }}
                                onFocus={() => {
                                    setShowIngredients(true);
                                }}
                                value={ingredientValue.name}
                            />
                            <div className={styles.ingredientsAmountInputContainer}>
                                <Input
                                    className={styles.ingredientsAmountInput}
                                    inputClassName={styles.ingredientsAmountValue}
                                    onChange={e => {
                                        const value = e.target.value;
                                        setIngredientValue({
                                            ...ingredientValue,
                                            amount: value
                                        });
                                    }}
                                    value={ingredientValue.amount}
                                />
                                {ingredientValue.measurement_unit !== '' && (
                                    <div className={styles.measurementUnit}>{ingredientValue.measurement_unit}</div>
                                )}
                            </div>
                            {showIngredients && ingredients.length > 0 && (
                                <IngredientsSearch
                                    ingredients={ingredients}
                                    onClick={(id, name, measurement_unit) => {
                                        setIngredients([]);
                                        setShowIngredients(false);
                                    }}
                                />
                            )}
                        </div>
                        <div className={styles.ingredientsAdded}>
                            {recipeIngredients.map(item => (
                                <div className={styles.ingredientsAddedItem} key={item.id}>
                                    <span className={styles.ingredientsAddedItemTitle}>{item.name}</span> <span>-</span>
                                    <span>{item.amount}{item.measurement_unit}</span>{' '}
                                    <span
                                        className={styles.ingredientsAddedItemRemove}
                                        onClick={() => {
                                            const recipeIngredientsUpdated = recipeIngredients.filter(ingredient => {
                                                return ingredient.id !== item.id;
                                            });
                                            setRecipeIngredients(recipeIngredientsUpdated);
                                        }}
                                    >
                    Удалить
                  </span>
                                </div>
                            ))}
                        </div>
                        <div
                            className={styles.ingredientAdd}
                            onClick={() => {
                                setRecipeIngredients([...recipeIngredients, ingredientValue]);
                            }}
                        >
                            Добавить ингредиент
                        </div>
                    </div>
                    <div className={styles.cookingTime}>
                        <Input
                            label="Время приготовления"
                            className={styles.ingredientsTimeInput}
                            labelClassName={styles.cookingTimeLabel}
                            inputClassName={styles.ingredientsTimeValue}
                            onChange={e => {
                                const value = e.target.value;
                                setRecipeTime(value);
                            }}
                            value={recipeTime}
                        />
                        <div className={styles.cookingTimeUnit}>мин.</div>
                    </div>
                    <Textarea
                        label="Описание рецепта"
                        onChange={e => {
                            const value = e.target.value;
                            setRecipeText(value);
                        }}
                    />
                    <FileInput
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        label="Загрузить фото"
                    />
                    <Button
                        disabled={checkIfDisabled()}
                        btnStyle="btnBlue"
                    >
                        Создать рецепт
                    </Button>
                </Form>
            </Container>
        </Main>
    );
};