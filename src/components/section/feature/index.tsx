import { FC } from 'react'

import AnchorTag from 'components/ui/AnchorTag'

import feature01 from 'images/feature01.svg'
import './featureSection.css'

const FeatureSectionComponent: FC = () => {
  return (
    <div className='featureSection-container'>
      <div className='featureSection-left'>
        <h3 className='active'>01</h3>
        <h3>02</h3>
        <h3>03</h3>
        <h3>04</h3>
      </div>
      <div className='featureSection-right'>
        <h1>Our Featured Funds</h1>
        <h3>Nikko AM ARM Disruptive Innovation Fund</h3>
        <img src={feature01} alt='shape feature 01' />
        <ul>
          <li>
            NAV (per 100 shares) <span>¥196,977</span>
          </li>
          <li>
            Net Assests <span>7,309,193 million</span>
          </li>
          <li>
            Day Change <span>-1,094</span>
          </li>
          <li>
            Issued <span>3,710,686,634 shares</span>
          </li>
        </ul>
        <AnchorTag text='Explore more funds' color='teal' />
      </div>
    </div>
  )
}

export default FeatureSectionComponent
