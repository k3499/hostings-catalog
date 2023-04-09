import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from 'next/font/local'
import SitesContext from '../components/SitesContext/SitesContext';

config.autoAddCss = false;
const golos = localFont({ src: './fonts/GolosText-VariableFont_wght.ttf' });

const MyApp = ({ Component, pageProps }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
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
        <Component {...pageProps} mobileMenu={mobileMenu}/>
      </SitesContext.Provider>
    </div>
  );
}

MyApp.getInitialProps = async function (appContext) {
  const globalProps = {
    // Define your global props here
    appName: 'My Awesome App',
    appVersion: '1.0.0',
  };

  return {
      ...globalProps,
    }
};

export default MyApp;