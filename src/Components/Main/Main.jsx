//  components
import ExperiencesCard from '../Cards/ExperiencesCard'
import CardTraining from '../Cards/TrainingCard'
import HardSkillsCard from '../Cards/HardSkillsCard'
import SoftSkillsCard from '../Cards/SoftSkillsCard'
import InterestsCard from '../Cards/InterestsCard'

// scss
import './_main.scss'

export default function Main() {
  return (
    <>
      <main className="main">
        <CardTraining />
        <SoftSkillsCard />
          <HardSkillsCard />
          <ExperiencesCard />
        <InterestsCard />
      </main>
    </>
  )
}
