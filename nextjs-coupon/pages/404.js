import Head from "next/head"
import axios from 'axios'
import { Russo_One } from 'next/font/google';
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import Popular from "../components/popular/popular"
import homeStyles from "../styles/Home.module.css"
import notFoundStyles from "../styles/NotFound.module.css"

const russo = Russo_One({ subsets: ['latin', 'cyrillic'], weight: ['400']});

function Home({siteList, catList }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='title' content="Страница не найдена | besplatno skin" />
        <meta name='description' content="К сожалению страница не найдена | besplatno skin" />
        <title>Страница не найдена | besplatno skin</title>
      </Head>
      <Header catList={catList} />
      <div className={homeStyles.wrapper}>
        <Sidebar catList={catList}/>
        <main className={homeStyles.main}>
          <div className={`${notFoundStyles.glitch} ${russo.className} `} data-text="404">404</div>
          <p className={notFoundStyles.subtitle}>Страница не найдена</p>
          <h1 className={homeStyles.title}>Возможно вас заинтересует один из проектов:</h1>
          <div className={homeStyles.hr}></div>
          <Popular siteList={siteList}/>
        </main>
      </div>
    </>
  )
}


export async function getStaticProps(context) {
  try {
    const res = await axios.all([
        axios.get('http://127.0.0.1:1337/api/sites-lists?sort[0]=order%3Aasc&populate=logo&populate=slides'),
        axios.get('http://127.0.0.1:1337/api/categories')
      ])
      .then(axios.spread(( sites, categoryAll) => {
        const siteList = sites.data.data;
        const catList = categoryAll.data.data;
        return { siteList, catList} 
        })
      );
      const siteList = res.siteList;
      const catList = res.catList;
      return { props: { siteList, catList}};
    } catch (error) {
       return { props: { ...error } };
      }

}

export default Home;
