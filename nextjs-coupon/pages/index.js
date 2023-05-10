import Head from "next/head"
import axios from 'axios'
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import MainBanner from "../components/mainBanner/mainBanner"
import Popular from "../components/popular/popular"
import homeStyles from "../styles/Home.module.css"
import Footer from '../components/footer/footer'

function Home({ title, description, page_description, siteList, mobileMenu, handleMobileMenu, catList }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <Header catList={catList} />
      <div className={homeStyles.wrapper}>
        <Sidebar catList={catList}/>
        <main className={homeStyles.main}>
          <MainBanner />
          <Popular siteList={siteList}/>
        </main>
      </div>
      <Footer description={page_description}/>
    </>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await axios.all([
        axios.get('http://127.0.0.1:1337/api/homepage'), 
        axios.get('http://127.0.0.1:1337/api/sites-lists'),
        axios.get('http://127.0.0.1:1337/api/categories/')
      ])
      .then(axios.spread((home, sites, categoryAll) => {
        const homePage = home.data.data.attributes;
        const siteList = sites.data.data;
        const catList = categoryAll.data.data;
        return {homePage, siteList, catList} 
        })
      );
      const homePage = res.homePage;
      const siteList = res.siteList;
      const catList = res.catList;
      return { props: { ...homePage, siteList, catList }};
    } catch (error) {
       return { props: { ...error } };
      }

}

export default Home;
