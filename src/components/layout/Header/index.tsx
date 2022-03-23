import { FC } from 'react'

import SearchIcon from 'components/icon/SearchIcon'
import './header.css'

const Header: FC = () => {
  return (
    <header className='header-container'>
      <h3 className='header-brand'>
        nikko<span>am</span>
      </h3>
      <nav className='header-nav'>
        <ul>
          <li>About us</li>
          <li>Sustainability</li>
          <li>Insights & News</li>
          <li>Strategies</li>
          <li>Funds</li>
          <li>How to invest</li>
        </ul>
      </nav>
      <div className='header-search'>
        <SearchIcon />
      </div>
    </header>
  )
}

export default Header;
