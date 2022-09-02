// local Data

//  scss
import './_card.scss'
import softSkills from '../../Data/CardsData/SoftSkills'

export default function SoftSkillsCard() {
  return (
    <>
      <article className="card">
        <div className="card__container">
          <h2 className="card__container__title articleTitle">Soft Skills</h2>
          <ul className="card__container__ul">
            <li className="card__container__ul__li">
              {softSkills.seventhEntry}
            </li>
            <li className="card__container__ul__li">{softSkills.fifthEntry}</li>
            <li className="card__container__ul__li">
              {softSkills.fourthEntry}
            </li>
            <li className="card__container__ul__li">{softSkills.thirdEntry}</li>
            <li className="card__container__ul__li">
              {softSkills.secondEntry}
            </li>
            <li className="card__container__ul__li">{softSkills.firstEntry}</li>
          </ul>
        </div>
      </article>
    </>
  )
}
