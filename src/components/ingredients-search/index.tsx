import styles from './styles.module.css';

interface Ingredient {
    name: string;
    id: string;
    measurement_unit: string;
}

interface IngredientsSearchProps {
    ingredients: Ingredient[];
    onClick: (ingredient: Ingredient) => void;
}

const IngredientsSearch: React.FC<IngredientsSearchProps> = ({
                                                                 ingredients,
                                                                 onClick,
                                                             }) => {
    return (
        <div className={styles.container}>
            {ingredients.map((ingredient) => (
                <div key={ingredient.id} onClick={() => onClick(ingredient)}>
                    {ingredient.name}
                </div>
            ))}
        </div>
    );
};

export default IngredientsSearch;
