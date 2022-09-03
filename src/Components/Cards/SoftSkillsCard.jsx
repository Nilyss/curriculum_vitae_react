// hooks
import { useState, useEffect, useRef } from 'react'

// local Data
import softSkills from '../../Data/CardsData/SoftSkills'

//  scss
import './_card.scss'
import '../../Utils/sass/_global.scss'

export default function SoftSkillsCard() {
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
        setWidthEl(`20%`)
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
            <h2 className="card__container__title articleTitle">Soft Skills</h2>
            <ul className="card__container__ul">
              <li className="card__container__ul__li">
                {softSkills.seventhEntry}
              </li>
              <li className="card__container__ul__li">
                {softSkills.fifthEntry}
              </li>
              <li className="card__container__ul__li">
                {softSkills.fourthEntry}
              </li>
              <li className="card__container__ul__li">
                {softSkills.thirdEntry}
              </li>
              <li className="card__container__ul__li">
                {softSkills.secondEntry}
              </li>
              <li className="card__container__ul__li">
                {softSkills.firstEntry}
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="card__container__title articleTitle--modalFalse">
              Soft - Skills
            </h2>
          </div>
        )}
      </article>
    </>
  )
}
