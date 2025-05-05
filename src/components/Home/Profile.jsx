
import CustomTabs from '../Common/CustomTabs'
import CustomTabItem from '../Common/CutomTabItem'
import NamedImage from '../Common/NamedImage/NamedImage'
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
                    <h4 className='my-h4'>Frontend Stack</h4>
                    <div className={styles.viteReactDiv}>
                        <NamedImage imgSource='../../../src/assets/react.png' alt='React logo' name='React'/>
                        <span>+</span>
                        <NamedImage imgSource='../../../src/assets/vite.png' alt='React logo' name='Vite'/>   
                    </div>
                    <p className='my-p'>
                        When developing Frontend applications, i use React as a Framework with Vite as a package manager.
                    </p>
                </CustomTabItem>
                <CustomTabItem name="Backend">
                    Backend Tab Content
                </CustomTabItem>
            </CustomTabs>
        </section>
    )
}
export default Profile