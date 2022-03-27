import { FC } from 'react'

import shapeImage from 'images/section1_shape.svg'
import RightArrowIcon from 'components/icon/RightArrowIcon'

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
          <a href='https://www.google.com' target='_blank'>
            Learn more about who we are <RightArrowIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopSectionComponent
