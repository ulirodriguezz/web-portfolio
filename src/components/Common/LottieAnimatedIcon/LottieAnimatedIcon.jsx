import Lottie from 'lottie-react';
import styles from './LottieAnimatedIcon.module.scss'
import { useEffect, useRef } from 'react';
function LottieAnimatedIcon({animData,loop,autoplay,hidden}){
    const aniamtionRef = useRef()
    useEffect(()=>{
        if(!hidden){
            aniamtionRef.current.stop(); 
            aniamtionRef.current.play();
        }
    },[hidden])

    useEffect(() => {
        const instance = aniamtionRef.current;
        return () => {
            try {
                instance?.destroy();
            } catch (err) {
                console.warn('Error al destruir Lottie:', err);
            }
        };
    }, []);
    return(
        <div className={styles.iconContainer} style={{visibility: hidden? 'hidden':'visible'}}>
            <Lottie
                lottieRef={aniamtionRef}
                animationData={animData}
                loop={loop}
                autoplay={autoplay}
            />
        </div>
    )

}
export default LottieAnimatedIcon;