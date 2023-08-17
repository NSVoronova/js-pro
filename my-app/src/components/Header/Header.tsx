import React, {useState} from 'react'
import MenuHamburger from '../MenuHamburger/MenuHamburger'



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className='burger__container'>
            <MenuHamburger
             customClass='closed'
              text={isOpen ? '╳' : '☰'}
              onClick={handleBurgerClick}
              ></MenuHamburger>
            <div className='search__container'><div>Search...</div><div>╳</div></div>
            <button>&#x1f50d;</button>
            <div className='user'><img src="images/icon.png" alt="user" style={{width: "30px"}}/></div>
          </div>
          <div className={`burger__opened ${isOpen ? 'visible': ""}`}>Artem Malkin</div>
    </>
  )
}

export default Header
