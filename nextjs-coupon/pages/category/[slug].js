import Head from "next/head"
import axios from 'axios'
import { serialize } from "next-mdx-remote/serialize"
import Header from "../../components/header/header"
import Sidebar from "../../components/sidebar/sidebar"
import Footer from '../../components/footer/footer'
import homeStyles from "../../styles/Home.module.css"
import CatHead from '../../components/catHead/CatHead'
import SitesList from '../../components/sitesList/sitesList';

export default function Category({ title, image, slug, headDesc, customTitle, description, categoryPageText, siteList, catList }){
    return (
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='title' content={customTitle  === null
              ? title + " КС ГО | рейтинг сайтов с бесплатными скинами CS:GO" 
              : customTitle
              } />
            <meta name='description' content={ description === null
              ? "Список сайтов " + title + 
              " КС ГО и Dota 2 с бесплатными скинами и промокодами. Заходи и выбирай лучший " + title + 
              " сайт с большими бонусами. Используй промокод и выводи скины в Steam "
              : description
            } />
            { customTitle  === null
                ? <title>{ title } КС ГО | рейтинг сайтов с бесплатными скинами CS:GO</title>
                : <title>{ customTitle }</title>
            } 
        </Head>
        <Header slug={slug} catList={catList}/>
        <div className={homeStyles.wrapper}>
            <Sidebar slug={slug} catList={catList}/>
            <main className={homeStyles.main}>
            <CatHead title={title} description={headDesc} image={image}/>
            <SitesList siteList={siteList}/>
            </main>
        </div>
        <Footer description={categoryPageText}/>
        </>
    )
}


export async function getStaticPaths() {
    const res = await axios.get("http://127.0.0.1:1337/api/categories");
    const data = res.data.data;

    const paths = data.map((item) => ({
        params: { slug: item.attributes.slug },
      }));
    
    return { paths, fallback: false };
  }

export async function getStaticProps(ctx) {
    try {
        const { slug } = ctx.params;
        const res = await axios.all([
          axios.get('http://127.0.0.1:1337/api/categories/?populate=image&filters[slug][$eq]=' + slug), 
          axios.get('http://127.0.0.1:1337/api/sites-lists?filters[$and][0][categories][slug][$eq]='+ slug),
          axios.get('http://127.0.0.1:1337/api/categories/')
        ])
        .then(axios.spread((category, sites, categoryAll) => {
          const categoryPage = category.data.data[0].attributes;
          const siteList = sites.data.data;
          const catList = categoryAll.data.data;
          return {categoryPage, siteList, catList} 
          })
        );
        
        const categoryPage = res.categoryPage;
        const siteList = res.siteList;
        const catList = res.catList;
        //сериализация markdown
        const categoryPageMDX = categoryPage.page_description;
        const categoryPageText = await serialize(categoryPageMDX)
        return { props: { ...categoryPage, siteList, slug, catList, categoryPageText }};
      } catch (error) {
         return { props: { ...error } };
        }
  }
