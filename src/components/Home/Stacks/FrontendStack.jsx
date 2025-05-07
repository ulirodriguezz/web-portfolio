import { SiFramework } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import NamedImage from '../../Common/NamedImage/NamedImage'
import styles from './Stacks.module.scss'
import CustomAccordeon from "../../Common/Accordeon/CustomAccordeon";
function FrontendStack(){
    return(
        <>
            <h4 className='my-h4'>Frontend Stack</h4>
                <p>These are the tools and technologies I use when building modern web applications.</p>
                <h5 className='my-h5'><SiFramework className={styles.reactIcons}/> Frameworks and Bundlers</h5>
                <div className={styles.viteReactDiv}>
                    <NamedImage imgSource='../../../src/assets/react.png' alt='React logo' name='React'/>
                    <span>+</span>
                    <NamedImage imgSource='../../../src/assets/vite.png' alt='Vite logo' name='Vite'/>   
                </div>
                <CustomAccordeon title='Read about this'>
                    <p className='my-p'>
                        When developing web applications, I use React as a Framework with Vite as a bundler. For example, I made this site you're browsing now with React + Vite
                    </p>
                </CustomAccordeon>
                <h5 className='my-h5'><MdOutlineWeb className={styles.reactIcons}/> Core Web Technologies</h5>
                <div className={styles.viteReactDiv}>
                    <NamedImage imgSource='../../../src/assets/js.png' alt='JS logo' name='JavaScript'/>
                    <span>+</span>
                    <NamedImage imgSource='../../../src/assets/html.png' alt='HTML logo' name='HTML'/>
                    <span>+</span>
                    <NamedImage imgSource='../../../src/assets/css.png' alt='CSS logo' name='CSS'/>
                    <span>+</span>
                    <NamedImage imgSource='../../../src/assets/sass.png' alt='SASS logo' name='SASS'/>
                </div>
                <CustomAccordeon title='Read about this'>
                    <p className='my-p'>
                        When it comes to programming languages, I use the technologies shown above. <br />
                        JavaScript is my prefered language to make sites dynamic with events and functions as well as
                        programming the logic for the application. <br />
                        For the structure of the site/webapp, I use HTML, paying close attention to SEO best practices. <br />
                        For styling, I use CSS and SASS, often combined with Bootstrap or other component libraries.
                    </p>
                </CustomAccordeon>
                <h5 className='my-h5'><IoLibrary className={styles.reactIcons}/> UI & Utility Libraries</h5>
                <div className={styles.viteReactDiv}>
                    <NamedImage imgSource='../../../src/assets/bootstrap.png' alt='Bootstrap logo' name=' React Bootstrap'/>
                    <span>+</span>
                    <NamedImage imgSource='../../../src/assets/swal.png' alt='Sweet Alert logo' name='Sweet Alert'/>
                    <span>+</span>
                    <NamedImage imgSource='../../../src/assets/react-router.svg' alt='React Router logo' name='React Router'/>
                </div>
                <CustomAccordeon title='Read about this'> 
                    <p className='my-p'>
                        Finally, these are some of the libraries i often use in my projects. <br />
                        I use React Router to program the routing and navigation of my React applications. <br />
                        I use Sweet Alert and Tostify for alerts and notifications. <br />
                        I use Bootstrap for some of its pre-made components and styles.
                    </p>
                </CustomAccordeon>

        </>
    )
}
export default FrontendStack