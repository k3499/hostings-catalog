import Head from 'next/head';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import SingleHead from '../components/singleHead/singlehead';
import SingleBody from '../components/singleBody/singleBody';
import homeStyles from '../styles/Home.module.css';

export default function csfail({ 
  title, 
  description,
  siteName,
  link,
  promocode,
  money,
  text,
  slides
  }) {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name='title' content={title} />
          <meta name='description' content={description} />
          <title>{ title }</title>
      </Head>
      <Header/>
          <div className={homeStyles.wrapper}>
            <Sidebar/>
            <main className={homeStyles.main}> 
              <SingleHead slides={slides} siteName={siteName} promocode={promocode} money={money} link={link}/>
              <SingleBody title={title} text={text} logo={logo}/>
            </main>
          </div>
      <footer></footer>
    </>
  );
}

export async function getStaticProps() {
  try {
      const res = await axios.get('http://localhost:1337/api/sites-lists/1');
      
      const site = res.data.data.attributes;
      return { props:{ ...site }};
    } catch (error) {
      return { error };
    }
}