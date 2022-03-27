import { FC, useCallback, useEffect, useState } from 'react'

import AnchorTag from 'components/ui/AnchorTag'

import MOCK_DATA from 'data/index.json' // mock data
import './featureSection.css'

interface DataType {
  id: string
  nav: string
  assests: string
  dayChange: string
  issued: string
  imageUrl: string
}

const FeatureSectionComponent: FC = () => {
  const [data, setData] = useState<DataType[]>([])
  const [currentFeature, setCurrentFeature] = useState<DataType>({} as DataType)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    setData(MOCK_DATA.data)
    setCurrentFeature(MOCK_DATA.data[0])
  }, [])

  const changeItem = useCallback((index: number) => {
    setCurrentFeature(data[index])
    setCurrentIndex(index)
  }, [data])

  return (
    <div className='featureSection-container'>
      <div className='featureSection-left'>
        {data?.map((d, i) => (
          <>
            <h3
              key={d.id}
              className={i === currentIndex ? 'active' : ''}
              onClick={() => changeItem(i)}
            >
              {d.id}
            </h3>
          </>
        ))}
      </div>
      <div className='featureSection-right'>
        <h1>Our Featured Funds</h1>
        <h3>Nikko AM ARM Disruptive Innovation Fund</h3>
        <img src={currentFeature?.imageUrl} alt='shape feature' />
        <ul>
          <li>
            NAV (per 100 shares) <span>{currentFeature?.nav}</span>
          </li>
          <li>
            Net Assests <span>{currentFeature?.assests}</span>
          </li>
          <li>
            Day Change <span>{currentFeature?.dayChange}</span>
          </li>
          <li>
            Issued <span>{currentFeature?.issued}</span>
          </li>
        </ul>
        <AnchorTag text='Explore more funds' color='teal' />
      </div>
    </div>
  )
}

export default FeatureSectionComponent
