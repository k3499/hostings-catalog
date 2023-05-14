import Head from "next/head"
import axios from "axios"
import { serialize } from "next-mdx-remote/serialize"
import Header from "../components/header/header"
import Sidebar from "../components/sidebar/sidebar"
import SingleHead from "../components/singleHead/singlehead"
import SingleBody from "../components/singleBody/singleBody"
import Footer from "../components/footer/footer"
import homeStyles from "../styles/Home.module.css"
import Related from "../components/related/related"

function fail({
  title,
  description,
  categories,
  siteName,
  link,
  promocode,
  money,
  pageText,
  slides,
  logo,
  error,
  catList,
  related
}) {
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
      <Header catList={catList}/>
      <div className={homeStyles.wrapper}>
        <Sidebar catList={catList}/>
        <main className={homeStyles.main}>
          <SingleHead
            slides={slides}
            siteName={siteName}
            promocode={promocode}
            money={money}
            link={link}
            logo={logo}
          />
          <SingleBody title={title} pageText={pageText} />
          <Related related={related}/>
        </main>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  try {
  //   const res = await axios
  //     .get(
  //       "http://127.0.0.1:1337/api/sites-lists?filters[slug][$eq]=fail&populate=*"
  //     )
  //     .then((res) => {
  //       const singlePage = res.data.data[0].attributes
  //       return { singlePage }
  //     })
  //   const site = res.singlePage
  //   const pageTextMDX = site.text
  //   //сериализация markdown
  //   const pageText = await serialize(pageTextMDX)
  //   return { props: { ...site, pageText } }
  // } catch (error) {
  //   return { props: { ...error } }
  // }


  const res = await axios.all([
    axios.get('http://127.0.0.1:1337/api/sites-lists?filters[slug][$eq]=fail&populate=*'), 
    axios.get('http://127.0.0.1:1337/api/categories/')
  ])
  .then(
    axios.spread((page, categoryAll) => {
      const pageinfo = page.data.data[0].attributes;
      const categoryList = categoryAll.data.data;
      return {pageinfo, categoryList} 
    }))
    const singlePage = res.pageinfo;
    const relatedRes = await axios
      .get(
        "http://127.0.0.1:1337/api/sites-lists?pagination[page]=1&pagination[pageSize]=10&filters[categories][slug][$eq]=" + singlePage.categories.data[0].attributes.slug
      )
      .then((res) => {
        const ralatedSites = res.data.data;
        return { ralatedSites }
      })


const catList = res.categoryList;
const pageTextMDX = singlePage.text;
const related = relatedRes.ralatedSites;
//сериализация markdown
const pageText = await serialize(pageTextMDX)
return { props: { ...singlePage, pageText, catList, related } }
} catch (error) {
return { props: { ...error } }

}}

export default fail
