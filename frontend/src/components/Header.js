import { Route, Link } from 'react-router-dom';
import logo from '../images/logo.svg'

function Header({onSignOut, email}) {
    return (
      <>
        <Route path="/" exact>
        <header className="header header_menu">
        <img className="header__logo" src={logo} alt="Рисунок" />
          <div className="header__container">
            <p className="header__email">{email}</p>
            <button  className="header__button" onClick={onSignOut}>Выйти</button>  
          </div>
          </header>
          {/* <img className="header__burger-menu" />    */}
        </Route>
        <Route path="/signin">
        <header className="header">
        <img className="header__logo" src={logo} alt="Рисунок" />  
          <Link to="/signup" className="header__link">Регистрация</Link>
          </header>  
        </Route>
        <Route path="/signup">
        <header className="header">
        <img className="header__logo" src={logo} alt="Рисунок" />
          <Link to="/signin" className="header__link">Войти</Link>
          </header>
        </Route>
      </>
    );
  }
  
  export default Header;





// function NavBar({ onSignOut }) {

//   return (
//     <div className="navbar">
//       <div className="navbar__logo">
//         <Logo />
//       </div>
//       <ul className="navbar__nav">
//         <li><Link to="ducks" className="navbar__link">Утки</Link></li>
//         <li><Link to="my-profile" className="navbar__link">Мой профиль</Link></li>
//         <li><button onClick={onSignOut} className="navbar__link navbar__button">Выйти</button></li>
//       </ul>
//     </div>
//   )
// }

