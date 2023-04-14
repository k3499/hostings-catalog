import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faCopy } from "@fortawesome/free-solid-svg-icons"
import styles from './card.module.css'
import utils from '../../styles/utils.module.css'
import logoFail from "/public/images/promokod-csfail.jpg"
import {useRef} from 'react';

export default function Card({site}) {
    console.log(site);
    const inputRef = useRef(null);

    const copyToClipboard = (evt) => {
        console.log(evt.currentTarget.classList);

        const copyButton = evt.currentTarget;
        let textToCopy = inputRef.current.value;
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Текст скопирован в буфер обмена:', textToCopy);
            copyButton.classList.add('buttonYellow_active');
            setTimeout(() => {
                copyButton.classList.remove('buttonYellow_active');
              }, 500);        
        })
        .catch((err) => {
            console.error('Ошибка при копировании текста в буфер обмена:', err);
        });
    };

    return (
        <article className={styles.popular__card}>
            <div className={styles.popular__money}>0.50$</div>
            <a className={styles.popular__info}>
                <FontAwesomeIcon style={{fontSize:"15px"}} icon={faCircleInfo}></FontAwesomeIcon>
            </a>
            <div className={styles.popular__cardImgContainer}>
                <Link href="/csfail-promokody-na-popolnenie" className={styles.popular__cardLink}>
                    <Image
                        className={styles.popular__cardImg}
                        loading="lazy"
                        src={logoFail}
                        placeholder="blur"
                        alt="csfail промокод"
                    />
                </Link>
            </div>
            <h2 className={styles.popular__cardTitle}><span>Промокод</span> {site.title}</h2>
            <div>
                <div className={styles.popular__promoCodeWrap}>
                    <input className={styles.popular__promoCode} type="text" value="DATAGAME" readOnly ref={inputRef}/>
                    <button className={styles.popular__promoCopy}  onClick={copyToClipboard}><FontAwesomeIcon style={{fontSize:"20px"}} icon={faCopy}></FontAwesomeIcon></button>
                </div>    
            </div>
            <a href="#" target="_blank" className={`${utils.button} ${styles.popular__promoSiteLink}`}>Получить</a>
        </article>
    );
}