// local Data
import experiences from '../../Data/Experiences'

//  scss
import './_card.scss'
import '../../Utils/sass/_global.scss'

export default function ExperiencesCard() {
  return (
    <>
      <article className="card">
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
      </article>
    </>
  )
}
