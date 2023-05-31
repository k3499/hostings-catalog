import { useState } from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import localFont from "next/font/local"
import SitesContext from "../components/SitesContext/SitesContext"
import "../styles/normalize.css"
import "../styles/global.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
const golos = localFont({ src: "./fonts/GolosText-VariableFont_wght.ttf" })

function MyApp({ Component, pageProps }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  function handleMobileMenu() {
    if (mobileMenu) {
      setMobileMenu(false)
      return
    }
    setMobileMenu(true)
  }

  const sites = {
    csfail: {
      title: "CSFAIL",
    },
    csgopolygon: {
      title: "CSGOPOLYGON",
    },
    csgopositive: {
      title: "csgopositive",
    },
  }

  return (
    
    <div className={golos.className}>
      <SitesContext.Provider value={{ sites: sites }}>
        <Component
          {...pageProps}
          mobileMenu={mobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      </SitesContext.Provider>
    </div>
  )
}

export default MyApp
