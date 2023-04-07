import styles from './popular.module.css';
import Card from '../card/card';
import { useContext } from 'react';
import SitesContext from '../SitesContext/SitesContext';

export default function Popular() {
    const { sites } = useContext(SitesContext );
    //console.log(sites);
    return (
        <section className={styles.popular}>
           <h1 className={styles.popular__title}>Популярные сайты</h1> 
           <div className={styles.popular__hr}></div>
           <div className={styles.popular__wrapper}>
           {Object.keys(sites).map(sitesId => (
                <Card key={sitesId} site={sites[sitesId]}/>
            ))}
           </div>
        </section>
    );
}