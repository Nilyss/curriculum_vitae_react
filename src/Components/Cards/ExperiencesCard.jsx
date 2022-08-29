// local Data
import { experiences } from '../../Data/Experiences'

//  scss
import './_card.scss'

export default function ExperiencesCard() {
  return (
    <>
      <article className="card">
        <div className="card__container">
          <h2 className="card__container__title">Expériences notables</h2>
          <ul className="card__container__ul">
            <li className="card__container__ul__li">
              {experiences.fourthEntry}
            </li>
            <li className="card__container__ul__li">
              {experiences.thirdEntry}
            </li>
            <li className="card__container__ul__li">
              {experiences.secondEntry}
            </li>
            <li className="card__container__ul__li">
              {experiences.firstEntry}
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}
