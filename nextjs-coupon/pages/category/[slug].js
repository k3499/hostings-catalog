import axios from 'axios'

export default function Category({ slug }){
    return <h1> { slug }</h1>
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
          axios.get('http://127.0.0.1:1337/api/sites-lists?categories.slug_eq='+ slug)
        ])
        .then(axios.spread((obj1, obj2) => {
          const homePage = obj1.data.data[0].attributes;
          const siteList = obj2.data.data;
          console.log(siteList)
          return {homePage, siteList} 
          })
        );
        
        
        const homePage = res.homePage;
        const siteList = res.siteList;
        return { props: { ...homePage, siteList, slug }};
      } catch (error) {
         return { props: { ...error } };
        }
  }
//   export async function getStaticProps(ctx) {
//     try {
//       const res = await axios.all([
//           axios.get('http://127.0.0.1:1337/api/homepage'), 
//           axios.get('http://127.0.0.1:1337/api/sites-lists')
//         ])
//         .then(axios.spread((obj1, obj2) => {
//           const homePage = obj1.data.data.attributes;
//           const siteList = obj2.data.data;
//           return {homePage, siteList} 
//           })
//         );
//         const { slug } = ctx.params;
//         console.log(ctx)
//         const homePage = res.homePage;
//         const siteList = res.siteList;
//         return { props: { ...homePage, siteList, slug: slug }};
//       } catch (error) {
//          return { props: { ...error } };
//         }
//   }