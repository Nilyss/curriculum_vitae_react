//  hooks
import { useState, useEffect, useRef } from 'react'

// local Data
import hardSkills from '../../Data/CardsData/HardSkills'

// logo
import html from '../../assets/logos/html5.png'
import css from '../../assets/logos/css3.png'
import js from '../../assets/logos/js.png'
import react from '../../assets/logos/react.png'
import node from '../../assets/logos/node.png'
import express from '../../assets/logos/express.png'
import mongodb from '../../assets/logos/mongodb.png'

//  scss
import './_card.scss'

export default function HardSkillsCard() {
  // init hooks
  const [modal, setModal] = useState(false)
  const [widthEl, setWidthEl] = useState()

  // toggle states function
  const toggleModalState = () => {
    setModal(!modal)
  }

  // target modal
  const refWidth = useRef()

    useEffect(() => {
        setWidthEl(`50%`)
    }, [])


  return (
    <>
      <article
        onMouseEnter={() => {
          setModal(true)
        }}
        onMouseLeave={() => {
          setModal(false)
        }}
        ref={refWidth}
        className={modal ? 'card cardTrue' : 'card cardFalse'}
        style={{ width: modal ? `${widthEl}` : '8em' }}
      >
        {modal ? (
          <div className="card__container">
            <h2 className="card__container__title articleTitle">Hard Skills</h2>
            <ul className="card__container__ul">
              <h3 className="articleSubtitle">Front-End</h3>
              <div className="card__container__ul__container">
                <li className="card__container__ul__li--alt">
                  {hardSkills.firstEntry}
                  <figure className="card__container__ul__li__fig">
                    <img
                      className="card__container__ul__li__fig__logo"
                      src={html}
                      alt="html logo"
                    />
                  </figure>
                </li>
                <li className="card__container__ul__li--alt">
                  {hardSkills.secondEntry}
                  <figure className="card__container__ul__li__fig">
                    <img
                      className="card__container__ul__li__fig__logo"
                      src={css}
                      alt="css logo"
                    />
                  </figure>
                </li>
                <li className="card__container__ul__li--alt">
                  {hardSkills.thirdEntry}
                  <figure className="card__container__ul__li__fig thirdLogo">
                    <img
                      className="card__container__ul__li__fig__logo"
                      src={js}
                      alt="Javascript logo"
                    />
                  </figure>
                </li>
                <li className="card__container__ul__li--alt">
                  {hardSkills.fourthEntry}
                  <figure className="card__container__ul__li__fig">
                    <img
                      className="card__container__ul__li__fig__logo"
                      src={react}
                      alt="react logo"
                    />
                  </figure>
                </li>
              </div>
              <h3 className="articleSubtitle">Back-End</h3>
              <div className="card__container__ul__container">
                <li className="card__container__ul__li--alt">
                  {hardSkills.fifthEntry}
                  <figure className="card__container__ul__li__fig">
                    <img
                      className="card__container__ul__li__fig__logo"
                      src={node}
                      alt="node logo"
                    />
                  </figure>
                </li>
                <li className="card__container__ul__li--alt">
                  {hardSkills.sixthEntry}
                  <figure className="card__container__ul__li__fig">
                    <img
                      className="card__container__ul__li__fig__logo--alt"
                      src={express}
                      alt="express logo"
                    />
                  </figure>
                </li>
                <li className="card__container__ul__li--alt">
                  {hardSkills.seventhEntry}
                  <figure className="card__container__ul__li__fig">
                    <img
                      className="card__container__ul__li__fig__logo--alt"
                      src={mongodb}
                      alt="mongo db logo"
                    />
                  </figure>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="articleTitle--modalFalse card__container__title">
              Hard - Skills
            </h2>
          </div>
        )}
      </article>
    </>
  )
}
