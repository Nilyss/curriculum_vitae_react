//  hooks
import { useState, useEffect, useRef } from 'react'

// local Data
import experiences from '../../Data/CardsData/Experiences'

//  scss
import './_card.scss'
import '../../Utils/sass/_global.scss'

export default function ExperiencesCard() {
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
            <h2 className="card__container__title articleTitle">
              Expériences notables
            </h2>
            <ul className="card__container__ul">
              <li className="card__container__ul__li">
                <strong>{experiences.fourthEntryDate}</strong>
                <br />
                {experiences.fourthEntry}
              </li>
              <li className="card__container__ul__li">
                <strong>{experiences.thirdEntryDate}</strong>
                <br />
                {experiences.thirdEntry}
              </li>
              <li className="card__container__ul__li">
                <strong>{experiences.secondEntryDate}</strong>
                <br />
                {experiences.secondEntry}
              </li>
              <li className="card__container__ul__li">
                <strong>{experiences.firstEntryDate}</strong>
                <br />
                {experiences.firstEntry}
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="articleTitle--modalFalse card__container__title">
              Expériences
            </h2>
          </div>
        )}
      </article>
    </>
  )
}
