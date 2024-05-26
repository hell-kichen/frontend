import styles from './style.module.css'

interface DescriptionProps {
    description: string
}

export default function Description({description}: DescriptionProps) {
    if (!description) {
        return null
    }
    return <div className={styles.description}>
        <h3 className={styles['description__title']}>Описание:</h3>
        <div className={styles['description__content']} dangerouslySetInnerHTML={{__html: description}}/>
    </div>
}
