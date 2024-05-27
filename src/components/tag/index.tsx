import styles from './styles.module.css'

interface Props {
    name: string
    color: string
}

const hexToRgb = (hex: string, alpha: number = 1): any => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha}` : null
}


const Tag = ({name, color = '#8775D2'}: Props) => {
    const background = hexToRgb(color, 0.1)
    return <div className={styles.tag} style={{
        backgroundColor: background,
        color
    }}>
        {name}
    </div>
}

export default Tag
