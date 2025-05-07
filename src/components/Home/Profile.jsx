
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
            <p className='my-p'>
                As a student of software engenieering, I have learnt to develop scalable solutions for both backend and frontend.
                I have developed several Rest APIs with Spring boot as a framework and Web Apps and SPAs with React.
                <br />
                I am capable of developing web applications from end to end including APIs and Databases (SQL and noSQL).
            </p>
            <h3 className='my-h3'>Skills and Tech Stack</h3>
            <CustomTabs defaultTabName = "Frontend">
                <CustomTabItem name="Frontend">
                    <FrontendStack/>
                </CustomTabItem>
                <CustomTabItem name="Backend">
                    <BackendStack/>
                </CustomTabItem>
                <CustomTabItem name="Extra Tools">
                    <Others/>
                </CustomTabItem>
            </CustomTabs>
        </section>
    )
}
export default Profile