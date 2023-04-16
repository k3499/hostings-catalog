import Head from "next/head"
import axios from 'axios'
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import MainBanner from "../components/mainBanner/mainBanner"
import Popular from "../components/popular/popular"
import homeStyles from "../styles/Home.module.css"
import Footer from '../components/footer/footer'

function Home({ title, description, page_description, mobileMenu, handleMobileMenu }) {
  console.log(page_description)
  return (
    <>
      <Head>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <Header handleMobileMenu={handleMobileMenu} mobileMenu={mobileMenu} />
      <div className={homeStyles.wrapper}>
        <Sidebar />
        <main className={homeStyles.main}>
          <MainBanner />
          <Popular  />
        </main>
      </div>
      <Footer description={page_description}/>
    </>
  )
}

export async function getStaticProps() {
  try {
      const res = await axios.get('http://127.0.0.1:1337/api/homepage');
      const homePage = res.data.data.attributes;
      return { props:{ ...homePage }};
    } catch (error) {
      return { error };
    }
}


export default Home;
