import Head from "next/head";
import axios from "axios";
import { serialize } from "next-mdx-remote/serialize";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import MainBanner from "../components/mainBanner/mainBanner";
import Popular from "../components/popular/popular";
import homeStyles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";

function Home({
  title,
  description,
  homePageText,
  siteList,
  catList,
  mainSlider,
  pageSize,
}) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='yandex-verification' content='0279ba5f7b8579a8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <link rel='canonical' href='' />
        <title>{title}</title>
      </Head>
      <Header catList={catList} />
      <div className={homeStyles.wrapper}>
        <Sidebar catList={catList} />
        <main className={homeStyles.main}>
          <div className={homeStyles.mainSliderWrapper}>
            <MainBanner mainSlider={mainSlider} />
          </div>
          <h1 className={homeStyles.title}>Промокоды для хостинга</h1>
          <div className={homeStyles.hr}></div>
          <Popular
            siteList={siteList.data}
            siteListMeta={siteList.meta}
            pageSize={pageSize}
          />
        </main>
      </div>
      <Footer description={homePageText} />
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await axios
      .all([
        axios.get("http://127.0.0.1:1338/api/homepage"),
        axios.get(
          "http://127.0.0.1:1338/api/sites-lists?sort[0]=order%3Aasc&populate=logo&pagination[page]=1&pagination[pageSize]=6&populate=slides"
        ),
        axios.get("http://127.0.0.1:1338/api/categories"),
        axios.get("http://127.0.0.1:1338/api/main-banners?populate=image"),
      ])
      .then(
        axios.spread((home, sites, categoryAll, slider) => {
          const homePage = home.data.data.attributes;
          const siteList = sites.data;
          const catList = categoryAll.data.data;
          const mainSlider = slider.data.data;
          return { homePage, siteList, catList, mainSlider };
        })
      );
    const homePage = res.homePage;
    const siteList = res.siteList;
    const catList = res.catList;
    const mainSlider = res.mainSlider;
    //сериализация markdown
    const homePageMDX = homePage.page_description;
    const homePageText = await serialize(homePageMDX);
    return {
      props: { ...homePage, siteList, catList, mainSlider, homePageText },
    };
  } catch (error) {
    return { props: { ...error } };
  }
}

export default Home;
