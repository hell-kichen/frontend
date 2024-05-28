import styles from './style.module.css';
import {Tag} from '../index';

interface TagData {
    id: string;
    color: string;
    name: string;
}

interface TagDataProps {
    tags: TagData[]
}

export default function TagsContainer({tags}: TagDataProps) {
    if (!tags) {
        return null;
    }

    return (
        <div className={styles['tags-container']}>
            {tags.map(tag => (
                <Tag key={tag.id} color={tag.color} name={tag.name}/>
            ))}
        </div>
    );
};