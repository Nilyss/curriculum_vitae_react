// hooks
import { useState } from 'react'

// style
import './_header.scss'

// images
import profilePicture from '../../assets/images/pp_small.jpg'

export default function Header() {
  // init states
  const [devEnvModal, setDevEnvModal] = useState(false)

  // toggle development environment modal
  return (
    <>
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
          <p className="title__container__right__address">
            2 allée Olympe de Gouges, apt. 11, 17180 PERIGNY
          </p>
          <p className="title__container__right__phoneNumber">06 95 59 37 54</p>
          <p className="title__container__right__mailAddress">
            decressac.nicolas@gmail.com
          </p>
          <p
            onClick={() => {
              setDevEnvModal(!devEnvModal)
            }}
            title="Afficher l'environnement de développement"
            className="title__container__right__developmentEnvironment"
          >
            Environment de développement
          </p>
          {devEnvModal && (
            <div className="devEnvModal">
              <p>
                <strong>IDE: </strong> IntelliJ IDEA - Ultimate
              </p>
              <p>
                <strong>Système d'exploitation:</strong> macOS Monterey 12.5.1
              </p>
              <p>
                <strong>VM: </strong> Ubuntu 22.04 LTS & Windows 11 pro
              </p>
              <p>
                <strong>Terminal:</strong> MacBook air m1
              </p>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
