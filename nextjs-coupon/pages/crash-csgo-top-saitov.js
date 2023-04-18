import Head from "next/head"
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import Footer from "../components/footer/footer"
import homeStyles from "../styles/Home.module.css"
import styles from "../styles/catStyle.module.css"
import CatHead from "../components/cathead/cathead"
import Card from "../components/card/card"

function Crash() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Главная страница</title>
      </Head>
      <Header />
      <div className={homeStyles.wrapper}>
        <Sidebar />
        <main className={homeStyles.main}>
          <CatHead />
          <h1 className={styles.category__title}>Список</h1>
          <div className={styles.category__hr}></div>
          <div className={styles.category__wrapper}>
            {/* {Object.keys(sites).map((sitesId) => (
              <Card key={sitesId} site={sites[sitesId]} />
            ))} */}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await axios.get("http://127.0.0.1:1337/api/sites-lists/1");
    const site = res.data;
    console.log(site)
    return { props: { ...site } }
  } catch (error) {
    return { props: { ...error } }
  }
}


export default Crash;