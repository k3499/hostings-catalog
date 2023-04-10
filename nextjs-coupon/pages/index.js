import Head from 'next/head';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import MainBanner from '../components/mainBanner/mainBanner';
import Popular from '../components/popular/popular';
import homeStyles from '../styles/Home.module.css';

export default function Home({mobileMenu, handleMobileMenu}) {
  console.log(mobileMenu)
  return (
    <>
      <Head>
          <title>Главная страница</title>
      </Head>
      <Header mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu}/>
          <div className={homeStyles.wrapper}>
              <Sidebar/>
              <main className={homeStyles.main}>
                <MainBanner/>
                <Popular/>
              </main>
            </div>
      <footer></footer>
    </>
  );
}





