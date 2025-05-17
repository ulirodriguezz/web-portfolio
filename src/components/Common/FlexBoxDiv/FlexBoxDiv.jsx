import styles from './FlexBoxDiv.module.scss';
function FlexBoxDiv ({children,direction='row'}){
    return(
      <div className={`${direction == 'row'? styles.rowFlexBox : styles.cloumnFlexBox} ${styles.genericDiv}`}>
        {children}
      </div>
    )
}
export default FlexBoxDiv;