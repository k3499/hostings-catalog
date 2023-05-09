import Head from "next/head"
import axios from 'axios'
import Header from "../../components/header/header"
import Sidebar from "../../components/sidebar/sidebar"
import Footer from '../../components/footer/footer'
import homeStyles from "../../styles/Home.module.css"
import CatHead from '../../components/catHead/CatHead'
import SitesList from '../../components/sitesList/sitesList';

export default function Category({ title, slug, description, page_description, mobileMenu, handleMobileMenu, siteList, catList }){
    return (
        <>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <title>{title}</title>
        </Head>
        <Header handleMobileMenu={handleMobileMenu} mobileMenu={mobileMenu}/>
        <div className={homeStyles.wrapper}>
            <Sidebar slug={slug} catList={catList}/>
            <main className={homeStyles.main}>
            <CatHead title={title}/>
            <SitesList siteList={siteList}/>
            </main>
        </div>
        <Footer description={page_description}/>
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
          axios.get('http://127.0.0.1:1337/api/categories/?filters[slug][$eq]=' + slug), 
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
        return { props: { ...categoryPage, siteList, slug, catList }};
      } catch (error) {
         return { props: { ...error } };
        }
  }
