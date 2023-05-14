import './card.css';
import lemon from '../../assets/lemon.svg';

function Card({ name, cardClass, info, setCurrentCard }) {
  function handleClick() {
    setCurrentCard(name);
  }

  return (
    <div className="card">
      <div className="card__top">
        <div className={`card__image-block ${cardClass}`}>
          <img src={lemon} className="card__img" />
        </div>
        <div className="card__info">
          <h2 className="card__title">{name}</h2>
          <div className="card__lists">
            {info.map((list) => (
              <div key={list.title} className="card__list-block">
                <h3 className="card__list-title">{list.title}</h3>
                <ul className="card__list">
                  {list.items.map((item) => (
                    <li key={item} className="card__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="button">
        Купить абонемент
      </button>
    </div>
  );
}

export { Card };
