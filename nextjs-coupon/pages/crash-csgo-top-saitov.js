import Head from "next/head"
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import Footer from "../components/footer/footer"
import homeStyles from "../styles/Home.module.css"
import styles from "../styles/catStyle.module.css"
import Card from "../components/card/card"
export default function crash() {
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
          <h1 className={styles.category__title}>Список</h1>
          <div className={styles.category__hr}></div>
          <div className={styles.category__wrapper}>
            {Object.keys(sites).map((sitesId) => (
              <Card key={sitesId} site={sites[sitesId]} />
            ))}
          </div>
        </main>
      </div>
      <Footer description={page_description} />
    </>
  )
}
