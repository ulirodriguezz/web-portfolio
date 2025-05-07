import { AiOutlineBranches } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import NamedImage from '../../Common/NamedImage/NamedImage'
import styles from './Stacks.module.scss'
import CustomAccordeon from "../../Common/Accordeon/CustomAccordeon";
function Others(){
    return(
        <>
            <h4 className='my-h4'>Other Skills and Tools</h4>
            <p>These are some tools and thecnologies I often use in my projects.</p>
            <h5 className='my-h5'><AiOutlineBranches className={styles.reactIcons}/>Version Controller</h5>
            <div className={styles.viteReactDiv}>
                <NamedImage imgSource='../../../src/assets/git.png' alt='Git logo' name='Git'/>
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/github.png' alt='Github logo' name='Github'/>   
            </div>
            <CustomAccordeon title='Read about this'>
            <p className='my-p'>
                <span className={styles.textHighlight}>Git:</span> Used for Used for version control in my projects, both in front and backend. <br />
                <span className={styles.textHighlight}>Github:</span> Used to host my repositories remotely, 
                allowing me to collaborate with other people and access them from different devices.
                Also used for deploying my projects with certain providers like AWS, Railway or Vercel.
            </p>
            </CustomAccordeon>
            <h5 className='my-h5'><FaLaptopCode className={styles.reactIcons}/>IDE</h5>
            <div className={styles.viteReactDiv}>
                <NamedImage imgSource='../../../src/assets/intellij.png' alt='IntelliJ logo' name='IntelliJ'/>
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/vs.png' alt='Visual Studio Code logo' name='VS Code'/>  
                <span>+</span>
                <NamedImage imgSource='../../../src/assets/eclipse.png' alt='Eclipse logo' name='Eclipse'/>  
            </div>
            <CustomAccordeon title='Read about this'>                
            <p className='my-p'>
                <span className={styles.textHighlight}>Intellij:</span> My Prefered IDE for developing backends with Spring <br />
                <span className={styles.textHighlight}>Visual Studio Code:</span> My Prefered IDE for developing React apps and frontends in general. <br />
                <span className={styles.textHighlight}>Eclipse:</span> Secondary IDE for backend development. I replaced it with IntelliJ but i am
                still familiar with it.
            </p>
            </CustomAccordeon>
  
        </>
    );
}
export default Others