import styles from './popular.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Popular() {
    return (
        <section className={styles.popular}>
           <h1 className={styles.popular__title}>Lorem ipsum dolor sit amet.</h1> 
           <div className={styles.popular__hr}></div>
           <div className={styles.popular__wrapper}>
                    <article className={styles.popular__card}>
                        <div className={styles.popular__money}>0.50$</div>
                        <a className={styles.popular__info}>
                        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faCircleInfo}></FontAwesomeIcon>
                        </a>
                        <div className={styles.popular__cardImgContainer}>
                            <a href="#" className={styles.popular__cardLink}>
                                <img className={styles.popular__cardImg} src="/images/promokod-csfail.jpg" alt="" />
                            </a>
                        </div>
                        <h2 className={styles.popular__cardTitle}>Промокод CSFAIL</h2>
                        <div>
                            <div className={styles.popular__promoCode}>DATAGAME<button class="popular__promo-copy"><i class="fa-regular fa-copy"></i></button></div>    
                        </div>
                        <a href="#" target="_blank" class="button popular__promo-site-link">Получить</a>
                    </article>
                <article class="popular__card">Lorem ipsum dolor sit amet.</article>
                <article class="popular__card">1</article>
                <article class="popular__card">1</article>
                <article class="popular__card">1</article>
                <article class="popular__card">1</article>
                <article class="popular__card">1</article>
                <article class="popular__card">1</article> 
                <article class="popular__card">1</article> 
                <article class="popular__card">1</article> 
                <article class="popular__card">1</article> 

           </div>
        </section>
    );
}