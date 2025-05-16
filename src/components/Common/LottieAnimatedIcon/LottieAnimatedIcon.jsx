import Lottie from 'lottie-react';
import styles from './LottieAnimatedIcon.module.scss'
import { useEffect, useRef } from 'react';
function LottieAnimatedIcon({animData,loop,autoplay,hidden,height = '30px',width = '30px'}){
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
        <div className={styles.iconContainer} style={{visibility: hidden? 'hidden':'visible',height:height,width:width}}>
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