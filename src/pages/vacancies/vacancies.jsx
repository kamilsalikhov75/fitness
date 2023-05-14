import './vacancies.css';

import mainImg from '../../assets/main.jpeg';

function Vacancies() {
  return (
    <div className="vacancies">
      <div className="vacancies__block">
        <h1 className="title">Хочешь у нас работать?</h1>
        <h3 className="subtitle">
          На данный момент актуальны следующие вакансии:
        </h3>
        <p className="text__block">Менеджер в отдел продаж</p>
        <p className="text__block">Администратор рецепции</p>
        <p className="text__block">Инструктор тренажёрного зала</p>
        <h3 className="subtitle">
          Если ты хочешь работать в дружной и сплочённой команде, отправь резюме
          на почту:
          <a href="mailto:fitness@mail.ru" className="vacancies__link">
            fitness@mail.ru
          </a>
        </h3>
      </div>
      <img src={mainImg} className="main__img" />
    </div>
  );
}

export { Vacancies };
