//  hooks
import { useState, useEffect, useRef } from 'react'

// local Data
import interest from '../../Data/CardsData/Interest'

//  scss
import './_card.scss'

export default function InterestsCard() {
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
        setWidthEl(`30%`)
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
              Centres d'intérêts
            </h2>
            <ul className="card__container__ul">
              <li className="card__container__ul__li">{interest.sixthEntry}</li>
              <li className="card__container__ul__li">{interest.fifthEntry}</li>
              <li className="card__container__ul__li">
                {interest.fourthEntry}
              </li>
              <li className="card__container__ul__li">{interest.thirdEntry}</li>
              <li className="card__container__ul__li">
                {interest.secondEntry}
              </li>
              <li className="card__container__ul__li">{interest.firstEntry}</li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="articleTitle--modalFalse card__container__title">
              Centre d'intéret
            </h2>
          </div>
        )}
      </article>
    </>
  )
}
