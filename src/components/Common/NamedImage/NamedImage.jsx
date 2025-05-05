import styles from './NamedImage.module.scss'

function NamedImage({imgSource,alt,name}){
    return(
        <div className={styles.namedImageDiv}>
            <img src={imgSource} alt={alt} />
            <span>{name}</span>
        </div>
    )
}
export default NamedImage;  