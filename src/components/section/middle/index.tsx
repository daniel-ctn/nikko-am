import { FC } from 'react'

import shapeImage from 'images/section2_shape.svg'
import './midSection.css'
import RightArrowIcon from "../../icon/RightArrowIcon";

const MidSectionComponent: FC = () => {
  return (
    <div className='midSection-container'>
      <div className='midSection-left'>
        <img src={shapeImage} alt='' />
      </div>
      <div className='midSection-right'>
        <h4>Team of unique combination</h4>
        <h1>Global Intelligence Asian Insights Local Experience</h1>
        <div className='midSection-right__info'>
          <h5>
            We transform intelligent insights into innovative, relevant investment
            opportunities for our clients. Leveraging our unique combination of a
            global perspective complemented by our Asian DNA, we aspire to create
            sophisticated and diverse solutions that set new standards in the
            asset management industry.
          </h5>
          <a href='https://www.google.com' target='_blank'>
            Learn more about what makes us unique <RightArrowIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MidSectionComponent
