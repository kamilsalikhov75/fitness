import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a href="/index.html" className="header__logo">
          <img src={logo} className="header__img" />
        </a>
        <p className="header__text">г. Набережные Челны, пр. Мира, 21</p>
        <a href="tel:+78552823892" className="header__link">
          +7 (8552) 823-892
        </a>
      </div>
      <nav className="header__navigation">
        <Link to="/index.html" className="header__navigation-link">
          Главная
        </Link>
        <Link to="/cards" className="header__navigation-link">
          Абонементы
        </Link>
        <Link to="/vacancies" className="header__navigation-link">
          Вакансии
        </Link>
        <Link to="/rules" className="header__navigation-link">
          Правила клуба
        </Link>
        <Link to="/team" className="header__navigation-link">
          Наша команда
        </Link>
        <Link to="/timetable" className="header__navigation-link">
          Расписание
        </Link>
      </nav>
    </header>
  );
}

export { Header };
