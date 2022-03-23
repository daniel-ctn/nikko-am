import { FC, ReactElement } from 'react'
import Header from './Header'

const Layout: FC = ({ children }): ReactElement => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
