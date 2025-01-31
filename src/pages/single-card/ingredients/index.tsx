import styles from './style.module.css';

interface Ingredient {
    name: string;
    amount: number;
    measurement_unit: string;
}

interface IngredientsProps {
    ingredients: Ingredient[];
}

export default function Ingredients({ingredients}: IngredientsProps) {
    if (!ingredients) {
        return null;
    }

    return (
        <div className={styles.ingredients}>
            <h3 className={styles['ingredients__title']}>Ингредиенты:</h3>
            <div className={styles['ingredients__list']}>
                {ingredients.map(({name, amount, measurement_unit}) => (
                    <p
                        key={`${name}${amount}${measurement_unit}`}
                        className={styles['ingredients__list-item']}
                    >
                        {name} - {amount} {measurement_unit}
                    </p>
                ))}
            </div>
        </div>
    );
};
