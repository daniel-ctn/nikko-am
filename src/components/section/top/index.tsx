import { FC } from 'react'

import AnchorTag from 'components/ui/AnchorTag'

import shapeImage from 'images/section1_shape.svg'
import './topSection.css'

const TopSectionComponent: FC = () => {
  return (
    <div className='topSection-container'>
      <div className='topSection-left'>
        <img src={shapeImage} alt='Shape Image' />
      </div>
      <div className='topSection-right'>
        <h1>
          Progressive Solutions Competitive Performance Global Citizen With
          Asian DNA
        </h1>
        <div className='topSection-right__info'>
          <h3>We're of Asia's largest asset managers</h3>
          <AnchorTag text='Learn more about who we are' color='teal' />
        </div>
      </div>
    </div>
  )
}

export default TopSectionComponent
