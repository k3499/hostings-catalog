// `pages/_app.js`
import '../styles/normalize.css';
import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from 'next/font/local'
import SitesContext from '../components/SitesContext/SitesContext';

config.autoAddCss = false;
const golos = localFont({ src: './fonts/GolosText-VariableFont_wght.ttf' })

export default function App({ Component, pageProps }) {
  const sites = {
    csfail: {
      title: "CSFAIL"
    },
    csgopolygon: {
      title: "CSGOPOLYGON"
    },
    csgopositive: {
      title: "csgopositive"
    }
  };
  return (

    <div className={golos.className}>
      <SitesContext.Provider value={{ sites: sites }}>
        <Component {...pageProps} />
      </SitesContext.Provider>
    </div>
  );
}