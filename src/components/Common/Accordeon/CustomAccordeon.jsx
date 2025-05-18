import styles from './CustomAccordeon.module.scss'
import Accordion from 'react-bootstrap/Accordion';
function CustomAccordeon({children,title}){
    return(
        <Accordion className={styles.skillAccordion} defaultActiveKey='0'>
            <Accordion.Item eventKey="0">
                    <Accordion.Header><span className={styles.title}>{title}</span></Accordion.Header>
                    <Accordion.Body>
                    {children}
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CustomAccordeon