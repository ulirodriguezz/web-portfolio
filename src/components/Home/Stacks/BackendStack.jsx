import { SiFramework } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import NamedImage from '../../Common/NamedImage/NamedImage'
import styles from './Stacks.module.scss'
function BackendStack(){
    return(
        <>
        <h4 className='my-h4'>Backend Stack</h4>
                    <p>These are the tools and technologies I use when building Rest APIs.</p>
                    <h5 className='my-h5'><SiFramework className={styles.reactIcons}/> Frameworks and Tools</h5>
                    <div className={styles.viteReactDiv}>
                        <NamedImage imgSource='../../../src/assets/spring.png' alt='Spring logo' name='Spring'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/maven.png' alt='Maven logo' name='Maven'/>   
                    </div>
                    <p className='my-p'>
                        Spring: Used to build several REST APIs from scratch using annotations and JPA. <br />
                        Maven: Used for project build and dependency management across all my Java projects.
                    </p>
                    <h5 className='my-h5'><MdOutlineWeb className={styles.reactIcons}/> Languages</h5>
                    <div className={styles.viteReactDiv}>
                        <NamedImage imgSource='../../../src/assets/java.png' alt='Java logo' name='Java'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/sql.png' alt='SQL logo' name='SQL'/>
                    </div>
                    <p className='my-p'>
                        Java: Used to program all levels of the APIs. Including the controller, 
                        service and data access layers, java classes, Spring security, business logic and so on.  <br />
                        SQL: For creating schemas and queries to relational databases. Often combined with HQL 
                        when working with Hibernate and JPA
                    </p>
                    <h5 className='my-h5'><FaDatabase className={styles.reactIcons}/> Databases and ORMs</h5>
                    <div className={styles.viteReactDiv}>
                        <NamedImage imgSource='../../../src/assets/mysql.png' alt='MySQL logo' name='MySQL'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/mongodb.png' alt='MongoDB logo' name='MongoDB'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/firestore.png' alt='Firestore logo' name='Firestore'/>
                    </div>
                    <p className='my-p'>
                        MySQL: Primary database used in almost all my backend projects. <br />
                        MongoDB and Firestore: Explored in side projects. I am familiar with their 
                        structure and querying but I have not used them in many projects. <br />
                    </p>
                    <h5 className='my-h5'><IoLibrary className={styles.reactIcons}/>Libraries and Dependencies</h5>
                    <div className={styles.viteReactDiv}>
                    <NamedImage imgSource='../../../src/assets/hibernate.svg' alt='Hibernate logo' name='Hibernate'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/spring-sec.png' alt='Spring Security logo' name='Spring Security'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/jwt.png' alt='JWT logo' name='JWT'/>
                        <span>+</span>

                    </div>
                    <p className='my-p'>
                    Hibernate + JPA: ORM used for mapping Java classes (JPA entities) to MySQL tables, as well as
                    using its query language (HQL) for accesing and retrieving data. <br />
                    Spring Security: Used to handle CORS, role-based access, session validation
                    and authentication filters within the API
                    JPA: Access token used together with Spring Security for validating user's credentials and sessions.
                    </p>
        </>
    )
}
export default BackendStack