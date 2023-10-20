import logon from '/src/assets/images/logo.png'
import nav from '/src/assets/images/menu.png'
import { Link } from 'react-router-dom'

function Header() { 
  return (
    <>
        <div className="nav-container">
            <img className="logo" src={logon} />
            <div className="nav-bar">
            <Link className="navbtn" to='/about' >О нас</Link>
            <Link className="navbtn" to='/'>Продукция</Link>
            <Link className="navbtn" to='/'>Производство</Link>
            <Link className="navbtn" to='/stat'>Статистика</Link>
            <Link className="navbtn" to='/new'>Новости</Link>
            <Link className="navbtn" to='/documents'>Документация</Link>
            </div>
            <div>
            <a className="navbtn1" href="#">+78909378276</a>
            <img className="navlogo" src={nav} />
            </div>
        </div>
    </>
  )
  
}

export default Header