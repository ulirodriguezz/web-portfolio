import { SiFramework } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import NamedImage from '../../Common/NamedImage/NamedImage'
import styles from './Stacks.module.scss'
import CustomAccordeon from "../../Common/Accordeon/CustomAccordeon";
function BackendStack() {
    return (
        <>
            <h4 className='my-h4'>Backend Stack</h4>
            <p>These are the tools and technologies I use when building Rest APIs.</p>
            <h5 className='my-h5'><SiFramework className={styles.reactIcons} /> Frameworks and Tools</h5>
            <div className={styles.viteReactDiv}>
                <NamedImage imgSource='../../../src/assets/spring.png' alt='Spring logo' name='Spring' />
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/maven.png' alt='Maven logo' name='Maven' />
            </div>
            <CustomAccordeon title={'Read about this'}>
                <p className="my-p">
                    <span className={styles.textHighlight}>Spring:</span> Used to build several REST APIs 
                    from scratch using annotations and JPA.
                </p>
                <p className="my-p">
                    <span className={styles.textHighlight}>Maven:</span> Used for project build and dependency
                    management across all my Java projects.
                </p>
            </CustomAccordeon>
            <h5 className='my-h5'><MdOutlineWeb className={styles.reactIcons} /> Languages</h5>
            <div className={styles.viteReactDiv}>
                <NamedImage imgSource='../../../src/assets/java.png' alt='Java logo' name='Java' />
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/sql.png' alt='SQL logo' name='SQL' />
            </div>
            <CustomAccordeon title={'Read about this'}>
                <p className="my-p">
                    <span className={styles.textHighlight}>Java:</span> Used to program all layers of the APIs,
                    including the controller, service, and data access layers as well as the buisness logic.
                </p>
                <p className="my-p">
                    <span className={styles.textHighlight}>SQL:</span> Used for creating schemas and queries in relational
                    databases. Often combined with HQL when working with Hibernate and JPA.
                </p>
            </CustomAccordeon>
            <h5 className='my-h5'><FaDatabase className={styles.reactIcons} /> Databases</h5>
            <div className={styles.viteReactDiv}>
                <NamedImage imgSource='../../../src/assets/mysql.png' alt='MySQL logo' name='MySQL' />
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/mongodb.png' alt='MongoDB logo' name='MongoDB' />
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/firestore.png' alt='Firestore logo' name='Firestore' />
            </div>
            <CustomAccordeon title={'Read about this'}>
                <p className="my-p">
                    <span className={styles.textHighlight}>MySQL:</span> Primary database used in almost all my backend
                    projects.
                </p>
                <p className="my-p">
                    <span className={styles.textHighlight}>MongoDB </span> 
                    and <span className={styles.textHighlight}>Firestore: </span>
                    Explored in side projects. I am familiar with their structure and querying, but I have not used them in
                    many projects.
                </p>
            </CustomAccordeon>
            <h5 className='my-h5'><IoLibrary className={styles.reactIcons} />Libraries and Dependencies</h5>
            <div className={styles.viteReactDiv}>
                <NamedImage imgSource='../../../src/assets/hibernate.svg' alt='Hibernate logo' name='Hibernate' />
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/spring-sec.png' alt='Spring Security logo' name='Spring Security' />
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/jwt.png' alt='JWT logo' name='JWT' />

            </div>
            <CustomAccordeon title={'Read about this'}>
                <p className="my-p">
                    <span className={styles.textHighlight}>Hibernate + JPA:</span> ORM used for mapping Java classes
                    (JPA entities) to MySQL tables, as well as using its query language (HQL) for accessing and retrieving
                    data.
                </p>
                <p className="my-p">
                    <span className={styles.textHighlight}>Spring Security:</span> Used to handle CORS, role-based access,
                    session validation, and authentication filters within the API.
                </p>
                <p className="my-p">
                    <span className={styles.textHighlight}>JWT:</span> Access token used together with Spring Security for
                    validating user credentials and managing sessions securely.
                </p>
            </CustomAccordeon>
        </>
    )
}
export default BackendStack