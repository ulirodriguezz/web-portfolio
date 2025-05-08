
import CustomTabs from '../Common/CustomTabs'
import CustomTabItem from '../Common/CutomTabItem'
import styles from './Home.module.scss'
import BackendStack from './Stacks/BackendStack';
import FrontendStack from './Stacks/FrontendStack';
import Others from './Stacks/Others';
function Profile(){
    return(
        <section className={styles.myProfile}>
            <h2 className='my-h2'>My Profile</h2>
            <p>
                As a software engineering student, I have learned to develop scalable solutions 
                for both frontend and backend systems.
            </p>
            <p>
                I have been part of development teams for academic projects, where we built and deployed 
                several REST APIs using
                Spring Boot as a framework, as well as web applications with React.
            </p>
            <p>
                These experiences helped me become familiar with object-oriented programming (OOP) and design
                 patterns, training me
                to write scalable and clean code while paying close attention to industry best practices and
                 application performance.
            </p>
            <p>
                I enjoy working with others and learning from their experiences, and I am effective at 
                communicating my ideas and
                concerns respectfully, while also being receptive to feedback. <br />
                Additionally, I am fluent in both english (C1 Cambridge Level) and spanish
            </p>
            <p>
                I am capable of developing full web applications, including APIs and both SQL and NoSQL databases.
                In addition to this, I have basic knowledge of infrastructure providers such as AWS, Railway, and Vercel, which I have used to deploy some
                of my projects.
            </p>
            <h3 className='my-h3'>Skills and Tech Stack</h3>
            <CustomTabs defaultTabName = "Frontend">
                <CustomTabItem name="Frontend">
                    <FrontendStack/>
                </CustomTabItem>
                <CustomTabItem name="Backend">
                    <BackendStack/>
                </CustomTabItem>
                <CustomTabItem name="Workflow Tools">
                    <Others/>
                </CustomTabItem>
            </CustomTabs>
        </section>
    )
}
export default Profile