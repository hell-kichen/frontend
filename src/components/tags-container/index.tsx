import styles from './styles.module.css'
import {Tag as TagDTO} from "../../shared/api/tags/models";
import {Tag} from "../index";

interface Props {
    tags?: TagDTO[]
}

const TagsContainer = ({tags}: Props) => {
    if (!tags) {
        return null
    }
    return <div className={styles['tags-container']}>
        {tags.map(tag => {
            return <Tag
                key={tag.id}
                color={tag.color}
                name={tag.name}
            />
        })}
    </div>
}

export default TagsContainer
