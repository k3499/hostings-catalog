import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons"
import styles from './card.module.css'
import utils from '../../styles/utils.module.css'
import logoFail from "/public/images/promokod-csfail.jpg"
import {useRef, useState} from 'react';

export default function Card({site}) {
    const inputRef = useRef(null);
    const [copyingStatus, setCopyingStatus] = useState(false)

    const copyToClipboard = (evt) => {
        const copyButton = evt.currentTarget;
        let textToCopy = inputRef.current.value;
        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Текст скопирован в буфер обмена:', textToCopy);
            copyButton.classList.add(styles.buttonYellow_active);
            setCopyingStatus(true);
            setTimeout(() => {
                copyButton.classList.remove(styles.buttonYellow_active);
                setCopyingStatus(false);
              }, 600);        
        })
        .catch((err) => {
            console.error('Ошибка при копировании текста в буфер обмена:', err);
        });
    };

    return (
        <article className={styles.card__wrap}>
            { site.money 
            ? <div className={styles.card__money}>{site.money}</div>  
            : ""
            }
            <a className={styles.card__info}>
                <FontAwesomeIcon style={{fontSize:"15px"}} icon={faCircleInfo}></FontAwesomeIcon>
            </a>
            <div className={styles.card__imgContainer}>
                <Link href={`/` + site.slug} className={styles.card__link}>
                    <Image
                        className={styles.card__img}
                        loading="lazy"
                        src={logoFail}
                        placeholder="blur"
                        alt="csfail промокод"
                    />
                </Link>
            </div>
            { site.promocode
            ? <h2 className={styles.card__title}><span>Промокод</span> {site.siteName}</h2>
            : <h2 className={styles.card__title}> {site.siteName}</h2>
            }
            
            <div>
                { site.promocode
                ? <>
                    <div className={styles.card__promoCodeWrap}>
                        <input className={styles.card__promoCode} type="text" value={site.promocode} readOnly ref={inputRef}/>
                        <button className={styles.card__promoCopy}  onClick={copyToClipboard}>
                            {copyingStatus 
                            ?<FontAwesomeIcon style={{fontSize:"20px"}} icon={faCheck}></FontAwesomeIcon>
                            :<FontAwesomeIcon style={{fontSize:"20px"}} icon={faCopy}></FontAwesomeIcon>
                            }
                        </button>
                    </div>
                </>
                :<>
                    <div className={styles.card__promoCodeWrap}>
                        <input className={styles.card__promoCode} type="text" value="Код не нужен" readOnly disabled/>
                    </div>
                </>
                }
  
            </div>
            <a href={site.link} target="_blank" className={`${utils.button} ${styles.card__promoSiteLink}`}>Получить</a>
        </article>
    );
}