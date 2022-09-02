// local Data
import training from '../../Data/CardsData/Training'

//  scss
import './_card.scss'
import '../../Utils/sass/_global.scss'

export default function CardTraining() {
  return (
    <>
      <article className="card">
        <div className="card__container">
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
      </article>
    </>
  )
}
