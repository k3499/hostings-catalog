import Head from "next/head"
import axios from 'axios'
import { serialize } from 'next-mdx-remote/serialize';
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import SingleHead from "../components/singleHead/singlehead"
import SingleBody from "../components/singleBody/singleBody"
import Footer from "../components/footer/footer"
import homeStyles from "../styles/Home.module.css"

function Csfail({
  title,
  description,
  siteName,
  link,
  promocode,
  money,
  pageText,
  slides,
  error
}) {
  
  console.log(title)
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      <div className={homeStyles.wrapper}>
        <Sidebar />
        <main className={homeStyles.main}>
          <SingleHead
            slides={slides}
            siteName={siteName}
            promocode={promocode}
            money={money}
            link={link}
          />
          <SingleBody title={title} pageText={pageText} />
        </main>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await axios.get("http://127.0.0.1:1337/api/sites-lists?filters[slug][$eq]=csfail-promokod-na-popolnenie")
    .then((res) => {
      const singlePage = res.data.data[0].attributes;
      return { singlePage };
    });
    const site = res.singlePage;
    const pageTextMDX = site.text;
    //сериализация markdown
    const pageText = await serialize(pageTextMDX);
    console.log(pageText)
    return { props: { ...site , pageText } }
  } catch (error) {
    return { props: { ...error } }
  }
}


export default Csfail;