import { FC, ReactElement } from 'react'
import Header from './Header'

const Layout: FC = ({ children }): ReactElement => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
