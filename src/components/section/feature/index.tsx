import { FC, useCallback, useEffect, useState } from 'react'
import gsap from 'gsap'

import AnchorTag from 'components/ui/AnchorTag'

import MOCK_DATA from 'data/index.json'
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

  // set mock data
  useEffect(() => {
    setData(MOCK_DATA.data)
    setCurrentFeature(MOCK_DATA.data[0])
  }, [])

  // animate
  useEffect(() => {
    gsap.set('.featureImg', {
      transformOrigin: '0% 50%',
    })
    gsap.fromTo(
      '.featureImg',
      {
        scaleX: 0.2,
      },
      { scaleX: 1 }
    )
  }, [currentFeature])

  const changeItem = useCallback(
    (index: number) => {
      setCurrentFeature(data[index])
      setCurrentIndex(index)
    },
    [data]
  )

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
        <img
          src={currentFeature?.imageUrl}
          alt='shape feature'
          className='featureImg'
        />
        <ul>
          <li>
            NAV (per 100 shares){' '}
            <span>{currentFeature?.nav}</span>
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
