// local Data
import { training } from '../../Data/Training'

//  scss
import './_card.scss'

export default function CardTraining() {
  return (
    <>
      <article className="card">
        <div className="card__container">
          <h2 className="card__container__title">Formations</h2>
          <ul className="card__container__ul">
            <li className="card__container__ul__li">{training.fourthEntry}</li>
            <li className="card__container__ul__li">{training.thirdEntry}</li>
            <li className="card__container__ul__li">{training.secondEntry}</li>
            <li className="card__container__ul__li">{training.firstEntry}</li>
          </ul>
        </div>
      </article>
    </>
  )
}
