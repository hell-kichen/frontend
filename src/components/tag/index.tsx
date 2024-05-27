import styles from './style.module.css';

interface TagProps {
    name: string;
    color?: string;
}

export default function Tag({name, color = '#8775D2'}: TagProps) {
    const background = `${color}1A`;
    return (
        <div className={styles.tag} style={{backgroundColor: background, color}}>
            {name}
        </div>
    );
};
