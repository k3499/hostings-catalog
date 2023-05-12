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
        <article className={styles.wrap}>
            { site.money 
            ? <div className={styles.money}>{site.money}</div>  
            : ""
            }
            <a className={styles.info}>
                <FontAwesomeIcon style={{fontSize:"15px"}} icon={faCircleInfo}></FontAwesomeIcon>
            </a>
            <div className={styles.imgContainer}>
                <Link href={`/` + site.slug} className={styles.link}>
                    <Image
                        className={styles.img}
                        src={logoFail}
                        placeholder="blur"
                        alt="csfail промокод"
                        priority={true}
                    />
                </Link>
            </div>
            { site.promocode
            ? <h2 className={styles.title}><span>Промокод</span> {site.siteName}</h2>
            : <h2 className={styles.title}> {site.siteName}</h2>
            }
            
            <div>
                { site.promocode
                ? <>
                    <div className={styles.promoCodeWrap}>
                        <input className={styles.promoCode} type="text" value={site.promocode} readOnly ref={inputRef}/>
                        <button className={styles.promoCopy}  onClick={copyToClipboard}>
                            {copyingStatus 
                            ?<FontAwesomeIcon style={{fontSize:"20px"}} icon={faCheck}></FontAwesomeIcon>
                            :<FontAwesomeIcon style={{fontSize:"20px"}} icon={faCopy}></FontAwesomeIcon>
                            }
                        </button>
                    </div>
                </>
                :<>
                    <div className={styles.promoCodeWrap}>
                        <input className={styles.promoCode} type="text" value="Код не нужен" readOnly disabled/>
                    </div>
                </>
                }
  
            </div>
            <a href={site.link} target="_blank" className={`${utils.button} ${styles.promoSiteLink}`}>Получить</a>
        </article>
    );
}