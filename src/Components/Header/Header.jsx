// libraries
import Lottie from 'lottie-react'
import homeIcon from '../../Utils/lotties/home'
import phoneIcon from '../../Utils/lotties/phone'
import emailIcon from '../../Utils/lotties/email'
import devEnv from '../../Utils/lotties/devEnv'

// hooks
import { useState, useEffect, useRef } from 'react'

// style
import './_header.scss'
import '../../Utils/sass/_global.scss'

// images
import profilePicture from '../../assets/images/pp_small.webp'

export default function Header() {
  // init states
  const [devEnvModal, setDevEnvModal] = useState(false)
  const [heightEl, setHeightEl] = useState()

  // toggle states function
  const toggleModalState = () => {
    setDevEnvModal(!devEnvModal)
  }

  // get the  modal block to toggle
  const refHeight = useRef()

  // send to state the current height in pixels
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  return (
    <>
      <header>
        <article className="header">
          <div className="title__container__left">
            <figure className="title__container__left__fig">
              <img
                className="title__container__left__fig__img"
                src={profilePicture}
                alt="Nicolas DECRESSAC"
              />
            </figure>
            <div className="title__container__left__name__title">
              <h1 className="title__container__left__name__title__h1">
                Nicolas DECRESSAC
              </h1>
              <p className="title__container__left__name__title__subtitle">
                Développeur web
              </p>
            </div>
          </div>
          <div className="title__container__right">
            <h2 className="title__container__right__title articleTitle">
              Contact
            </h2>
            <ul className="title__container__right__ul">
              <li className="title__container__right__ul__li">
                <Lottie animationData={homeIcon} className="homeLottie" />2
                allée Olympe de Gouges, apt. 11, 17180 PERIGNY
              </li>
              <li className="title__container__right__ul__li">
                <Lottie animationData={phoneIcon} className="phoneLottie" />
                06 95 59 37 54
              </li>
              <li className="title__container__right__ul__li">
                <Lottie animationData={emailIcon} className="emailLottie" />
                decressac.nicolas@gmail.com
              </li>
              <li
                onClick={toggleModalState}
                title="Afficher l'environnement de développement"
                className="title__container__right__ul__li liModal"
              >
                <Lottie animationData={devEnv} className="devEnvLottie" />
                Outils de développement
              </li>
            </ul>
            <div
              ref={refHeight}
              className={
                devEnvModal
                  ? 'devEnvModal devEnvModalTrue'
                  : 'devEnvModal devEnvModalFalse'
              }
              style={{ height: devEnvModal ? `${heightEl}` : '0px' }}
            >
              <ul className=" devEnvModal__ul">
                <li className="devEnvModal__ul__list">
                  <strong>IDE: </strong> IntelliJ IDEA - Ultimate
                </li>
                <li className="devEnvModal__ul__list">
                  <strong>Système d'exploitation:</strong> macOS Monterey 12.5.1
                </li>
                <li className="devEnvModal__ul__list">
                  <strong>VM: </strong> Ubuntu 22.04 LTS & Windows 11 pro
                </li>
                <li className="devEnvModal__ul__list">
                  <strong>Terminal:</strong> MacBook air m1
                </li>
              </ul>
            </div>
          </div>
        </article>
      </header>
    </>
  )
}
