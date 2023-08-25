import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import localFont from "next/font/local";
import Popup from "../components/popup/popup";
import "../styles/normalize.css";
import "../styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const golos = localFont({ src: "./fonts/GolosText-VariableFont_wght.ttf" });

const pageSize = 6; //количество элементов для вывода

function MyApp({ Component, pageProps }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const formSuccessMessage =
    "Сайт отправлен на проверку. Спасибо за обращение.";
  const formFailMessage = "Сайт отправлен на проверку. Спасибо за обращение.";

  // мобильное меню
  function handleMobileMenu() {
    if (mobileMenu) {
      setMobileMenu(false);
      return;
    }
    setMobileMenu(true);
  }
  //popup
  const openInfoPopup = (message) => {
    setPopupMessage(message);
    setIsInfoPopupOpen(true);
  };
  // закрыть все попапы
  const closeAllPopups = () => {
    setMobileMenu(false);
    setIsInfoPopupOpen(false);
  };

  // esc закрыть
  const handleEscClose = (event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  };
  // закрытие попапов по клику по оверлею
  const handleCLosePopupByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    closeAllPopups();
  };

  const handleSendForm = async (evt) => {
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      sitename: evt.target.sitename.value,
      link: evt.target.link.value,
      promokode: evt.target.promokode.value,
      owner: evt.target.owner.checked,
      description: evt.target.description.value,
    };

    // const endpoint = 'http://localhost:1338/api/form-requests';

    const endpoint = "https://api.hostoncoast.ru/api/form-requests";

    axios
      .post(endpoint, { data })
      .then((res) => {
        if (res) {
          openInfoPopup(formSuccessMessage);
          evt.target.reset();
        } else {
          openInfoPopup(formFailMessage);
          console.log("не получили данные ");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={golos.className}>
      <Component
        {...pageProps}
        mobileMenu={mobileMenu}
        handleMobileMenu={handleMobileMenu}
        handleSendForm={handleSendForm}
        pageSize={pageSize}
      />
      <Popup
        closePopup={closeAllPopups}
        isOpen={isInfoPopupOpen}
        message={popupMessage}
        onClick={handleCLosePopupByClickOnOverlay}
      />
    </div>
  );
}

export default MyApp;
