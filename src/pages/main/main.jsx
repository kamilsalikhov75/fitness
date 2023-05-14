import { Link } from 'react-router-dom';
import './main.css';
import dumbbellsImg from '../../assets/dumbbells.jpeg';
import mainImg2 from '../../assets/main-2.jpeg';
import mainImg3 from '../../assets/main-3.jpeg';

function Main() {
  return (
    <div className="main">
      <div className="main__block">
        <div className="main__info">
          <h1 className="title">
            Фитнес как образ <span>жизни!</span>
          </h1>
          <p className="text__block">Премиум фитнес клуб в Набережных Челнах</p>
          <Link to="/cards" className="link">
            Оформить абонемент
          </Link>
        </div>
        <img src={dumbbellsImg} className="main__img" />
      </div>
      <div className="main__block">
        <img src={mainImg2} className="main__image" />
        <img src={mainImg3} className="main__image" />
      </div>
    </div>
  );
}

export { Main };
