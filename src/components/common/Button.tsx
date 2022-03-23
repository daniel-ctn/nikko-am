import { FC } from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  variant: 'contained' | 'text' | 'outlined' | undefined
}

const CommonButton: FC<ButtonProps> = ({ variant = 'contained', children }) => {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  )
}

export default CommonButton
