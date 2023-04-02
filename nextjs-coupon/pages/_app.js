// `pages/_app.js`
import '../styles/normalize.css';
import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from 'next/font/local'

config.autoAddCss = false;
const golos = localFont({ src: './fonts/GolosText-VariableFont_wght.ttf' })

export default function App({ Component, pageProps }) {
  return (
    <div className={golos.className}>
      <Component {...pageProps} />
    </div>
  );
}