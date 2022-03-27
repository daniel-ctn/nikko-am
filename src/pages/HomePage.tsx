import { FC } from 'react'

import TopSectionComponent from 'components/section/top'
import MidSectionComponent from 'components/section/middle'
import FeatureSectionComponent from 'components/section/feature'

const HomePage: FC = () => {
  return (
    <>
      <TopSectionComponent />
      <MidSectionComponent />
      <FeatureSectionComponent />
    </>
  )
}

export default HomePage
