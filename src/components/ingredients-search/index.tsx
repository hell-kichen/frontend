import styles from './style.module.css';


interface Ingredient {
    id: string;
    name: string;
    measurement_unit: string;
}

interface IngredientsSearchProps {
    ingredients: Ingredient[];
    onClick: (id: string, name: string, measurement_unit: string) => void;
}

export default function IngredientsSearch({ingredients, onClick}: IngredientsSearchProps) {
    return (
        <div className={styles.container}>
            {ingredients.map(({name, id, measurement_unit}) => (
                <div key={id} onClick={() => onClick(id, name, measurement_unit)}>
                    {name}
                </div>
            ))}
        </div>
    );
}