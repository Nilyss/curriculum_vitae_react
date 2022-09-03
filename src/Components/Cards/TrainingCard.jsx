//  hooks
import { useState, useEffect, useRef } from 'react'

// local Data
import training from '../../Data/CardsData/Training'

//  scss
import './_card.scss'
import '../../Utils/sass/_global.scss'

export default function CardTraining() {
  // init hooks
  const [modal, setModal] = useState(false)
  const [widthEl, setWidthEl] = useState()

  // target modal
  const refWidth = useRef()

  useEffect(() => {
    setWidthEl(`50%`)
  }, [])

  return (
    <>
      <article
        onMouseEnter={() => {setModal(true)}}
        onMouseLeave={() => {setModal(false)}}
        ref={refWidth}
        className={modal ? 'card cardTrue' : 'card cardFalse'}
        style={{ width: modal ? `${widthEl}` : '8em' }}
      >
        {modal ? (
          <div>
            <h2 className="card__container__title articleTitle">Formations</h2>
            <ul className="card__container__ul">
              <li className="card__container__ul__li">
                <strong>{training.fourthEntryDate}</strong>
                <br />
                {training.fourthEntry}
              </li>
              <li className="card__container__ul__li">
                <strong>{training.thirdEntryDate}</strong>
                <br />
                {training.thirdEntry}
              </li>
              <li className="card__container__ul__li">
                <strong> {training.secondEntryDate}</strong>
                <br />
                {training.secondEntry}
              </li>
              <li className="card__container__ul__li">{training.firstEntry}</li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="articleTitle--modalFalse card__container__title">
              Formations
            </h2>
          </div>
        )}
      </article>
    </>
  )
}
