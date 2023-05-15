import styles from './related.module.css';
import Card from '../card/card';
import { useEffect, useState } from 'react';

export default function Related({ related }) {
    const [shuffleRelated, setShuffleRelated] = useState([]);
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    useEffect(() => {
        setShuffleRelated(shuffle(related))
    }, []);
    return (
        <section className={styles.related}>
            <h4 className={styles.title}>Похожие сайты</h4>
            <div className={styles.hr}></div>
            <div className={styles.wrapper}>
                {shuffleRelated.map((element) => {
                    return (<Card key={element.id} site={element.attributes}/>);
                })}
            </div>
        </section>
    );
}