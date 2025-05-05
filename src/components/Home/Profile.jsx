
import CustomTabs from '../Common/CustomTabs'
import CustomTabItem from '../Common/CutomTabItem'
import styles from './Home.module.scss'
function Profile(){
    return(
        <section className={styles.myProfile}>
            <h2 className='my-h2'>My Profile</h2>
            <p className='my-p'>
                As a student of software engenieering, i have leart to develop scalable solutions for both backend and frontend.
                I have developed several Rest APIs with Spring boot as a framework and Web Apps and SPAs with React.
                <br />
                I am capable of developing web applications from end to end including APIs and Databases (SQL and noSQL).
            </p>
            <h3 className='my-h3'>Frameworks</h3>
            <CustomTabs defaultTabName = "Frontend">
                <CustomTabItem name="Frontend">
                    FrontEnd Tab Content
                </CustomTabItem>
                <CustomTabItem name="Backend">
                    Backend Tab Content
                </CustomTabItem>
            </CustomTabs>
        </section>
    )
}
export default Profile