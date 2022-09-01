// local Data

//  scss
import './_card.scss'
import interest from '../../Data/Interest'

export default function InterestsCard() {
  return (
    <>
      <article className="card">
        <div className="card__container">
          <h2 className="card__container__title articleTitle">
            Centres d'intérêts
          </h2>
          <ul className="card__container__ul">
            <li className="card__container__ul__li">{interest.sixthEntry}</li>
            <li className="card__container__ul__li">{interest.fifthEntry}</li>
            <li className="card__container__ul__li">{interest.fourthEntry}</li>
            <li className="card__container__ul__li">{interest.thirdEntry}</li>
            <li className="card__container__ul__li">{interest.secondEntry}</li>
            <li className="card__container__ul__li">{interest.firstEntry}</li>
          </ul>
        </div>
      </article>
    </>
  )
}
