import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AnchorTag from 'components/ui/AnchorTag'

import shapeImage from 'images/section1_shape.svg'
import './topSection.css'

const TopSectionComponent: FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current || document

    gsap.to('.shape-svg', {
      y: innerHeight + 200,
      ease: 'slow (0.7, 0.7, false)',
      scrollTrigger: {
        trigger: element.querySelector('.topSection-left'),
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <div className='topSection-container' ref={ref}>
      <div className='topSection-left'>
        <img src={shapeImage} alt='Shape Image' className='shape-svg' />
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
