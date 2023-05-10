import { Russo_One } from 'next/font/google';
import styles from './CatHead.module.css'

const russo = Russo_One({ subsets: ['latin', 'cyrillic'], weight: ['400'], });

export default function CatHead({title, description, image}) {
    return (
        <div className={styles.banner}>
            <div className={styles.wrapper}>
                <p className={`${styles.title}  ${russo.className}`}>{ title }</p>
                <h1 className={`${styles.secondTitle} ${russo.className}`}>{ description }</h1>
            </div>
            {image.data === null
            ? console.log("no category image")
            : <div className={styles.bannerImg} style={{ background: `url(http://127.0.0.1:1337${image.data.attributes.url}) no-repeat`}}></div>
            }
        </div>
    );
}