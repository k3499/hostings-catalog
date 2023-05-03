import Head from "next/head"
import axios from 'axios'
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import MainBanner from "../components/mainBanner/mainBanner"
import Popular from "../components/popular/popular"
import homeStyles from "../styles/Home.module.css"
import Footer from '../components/footer/footer'

function Home({ title, description, page_description, siteList, mobileMenu, handleMobileMenu }) {
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
      <Header handleMobileMenu={handleMobileMenu} mobileMenu={mobileMenu} />
      <div className={homeStyles.wrapper}>
        <Sidebar />
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
        axios.get('http://127.0.0.1:1337/api/sites-lists')
      ])
      .then(axios.spread((obj1, obj2) => {
        const homePage = obj1.data.data.attributes;
        const siteList = obj2.data.data;
        return {homePage, siteList} 
        })
      );
      const homePage = res.homePage;
      const siteList = res.siteList;
      return { props: { ...homePage, siteList }};
    } catch (error) {
       return { props: { ...error } };
      }

}

export default Home;
