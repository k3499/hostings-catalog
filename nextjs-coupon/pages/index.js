import Head from 'next/head';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import MainBanner from '../components/mainBanner/mainBanner';
import Popular from '../components/popular/popular';
import homeStyles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Главная страница</title>
      </Head>
      <Header/>
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





