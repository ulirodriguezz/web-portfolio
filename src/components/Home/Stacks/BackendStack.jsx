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
                        When it comes to developing a backend, I use Spring as a framework for 
                        building Rest APIs that allow the frontend to access data stored in relational or non relational DBs.
                         In addition to Spring, I use Maven as a build tool and dependency manager for my projects.
                    </p>
                    <h5 className='my-h5'><MdOutlineWeb className={styles.reactIcons}/> Languages</h5>
                    <div className={styles.viteReactDiv}>
                        <NamedImage imgSource='../../../src/assets/java.png' alt='Java logo' name='Java'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/sql.png' alt='SQL logo' name='SQL'/>
                    </div>
                    <p className='my-p'>
                        Java is the programming language of my choice when developing APIs with Spring <br />
                        Since I often work with relational databases, I use SQL and HQL for managing queries to the 
                        database and data shemas.
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
                        At the time of storing data, the databases shown above are the ones I have used the most. <br />
                        MySQL is my relational database of choice and the one I have the most experience with.
                       <br />
                        MongoDB and Firestore are the only noSQL databases I have used in any of my projects but i also have some basic knowlage of
                        others like Cassandra, Neo4j and other storage services like AWS S3 buckets.
                    </p>
                    <h5 className='my-h5'><IoLibrary className={styles.reactIcons}/>Libraries adn Dependencies</h5>
                    <div className={styles.viteReactDiv}>
                    <NamedImage imgSource='../../../src/assets/hibernate.svg' alt='Hibernate logo' name='Hibernate'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/spring-sec.png' alt='Spring Security logo' name='Spring Security'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/jwt.png' alt='JWT logo' name='JWT'/>
                        <span>+</span>

                    </div>
                    <p className='my-p'>
                        These are some of the libraries and dependencies I use the most when creating Rest APIs.
                        When using MySQL I combine it with Hiberate and JPA for an easier mapping between 
                        my Java classes and entities in the database. This also simplifies writing queries thanks to
                        Hibernate's query language (HQL).
                        I use Spring security to configure CORS and authentication as well as including filters for JSON Web Tokens (JWT).
                    </p>
        </>
    )
}
export default BackendStack