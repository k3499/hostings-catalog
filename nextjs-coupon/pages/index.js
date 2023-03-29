import Head from 'next/head';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import MainBanner from '../components/mainBanner/mainBanner';
import Popular from '../components/popular/popular';
import homeStyles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* <link href="/css/fontawesome.css" rel="stylesheet">
          <link href="/css/brands.css" rel="stylesheet">
          <link href="/css/solid.css" rel="stylesheet">
          <link rel="stylesheet" href="normalize.css">
          <link rel="stylesheet" href="styles.css"> */}
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
















      // <Head>
      //   <meta charset="UTF-8" />
      //   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      //   <title>title</title>
      // </Head>
      // <section className={utilStyles.headingMd}>
      //   <p>Your Self Introduction</p>
      //   <p>
      //     (This is a sample website - you’ll be bu11ilding a site like this on{' '}
      //     <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      //   </p>
      // </section>
      // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      //   <h2 className={utilStyles.headingLg}>Blog</h2>
      //   <ul className={utilStyles.list}>
      //     {allPostsData.map(({ id, date, title }) => (
      //       <li className={utilStyles.listItem} key={id}>
      //         <Link href={`/posts/${id}`}>{title}</Link>
      //         <br />
      //         <small className={utilStyles.lightText}>
      //           <Date dateString={date} />
      //         </small>
      //       </li>
      //     ))}
      //   </ul>
      // </section>
  );
}





