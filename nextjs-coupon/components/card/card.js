import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCopy } from "@fortawesome/free-solid-svg-icons";
import styles from './card.module.css';
import utils from '../../styles/utils.module.css';
import logoFail from "/public/images/promokod-csfail.jpg";

export default function Card() {
    return (
        <article className={styles.popular__card}>
            <div className={styles.popular__money}>0.50$</div>
            <a className={styles.popular__info}>
                <FontAwesomeIcon style={{fontSize:"15px"}} icon={faCircleInfo}></FontAwesomeIcon>
            </a>
            <div className={styles.popular__cardImgContainer}>
                <Link href="/csfail-promokody-na-popolnenie" className={styles.popular__cardLink}>
                    <img className={styles.popular__cardImg} src="/images/promokod-csfail.jpg" alt="" />
                    <Image
                        className={styles.popular__cardImg}
                        loading="lazy"
                        src={logoFail}
                        placeholder="blur"
                        alt="csfail промокод"
                    />
                </Link>
            </div>
            <h2 className={styles.popular__cardTitle}>Промокод CSFAIL</h2>
            <div>
                <div className={styles.popular__promoCode}>DATAGAME
                    <button className={styles.popular__promoCopy}><FontAwesomeIcon style={{fontSize:"20px"}} icon={faCopy}></FontAwesomeIcon></button>
                </div>    
            </div>
            <a href="#" target="_blank" className={`${utils.button} ${styles.popular__promoSiteLink}`}>Получить</a>
        </article>
    );
}