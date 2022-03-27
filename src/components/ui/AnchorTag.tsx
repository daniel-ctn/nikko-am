import { FC } from 'react'
import RightArrowIcon from 'components/icon/RightArrowIcon'

import './AnchorTag.css'

interface AnchorTagProps {
  text: string
  color: 'white' | 'teal'
}

const AnchorTag: FC<AnchorTagProps> = ({text, color}) => {
  const strokeColor = color === 'white' ? '#FAFAFA' : '#00A4B8'

  return (
    <a href='https://www.google.com' target='_blank' className={color}>
      {text} <RightArrowIcon color={strokeColor}/>
    </a>
  )
}

export default AnchorTag
