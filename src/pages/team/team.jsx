import './team.css';
import olesya from '../../assets/olesya.jpeg';
import dmitry from '../../assets/dmitry.jpeg';

function Team() {
  return (
    <div className="team">
      <h1 className="title">Наша команда</h1>
      <div className="team__block">
        <div className="team__info">
          <h3 className="team__subtitle">Олеся</h3>
          <h3 className="subtitle">
            Инструктор тренажерного зала. Персональный тренер.
          </h3>
          <h3 className="subtitle">Специализация:</h3>
          <p className="text__block">силовой тренинг</p>
          <p className="text__block">снижение веса</p>
          <p className="text__block">составление программы питания</p>
          <p className="text__block">
            Опыт работы: 5 лет. Мастер спорта по аэробике
          </p>
        </div>
        <img src={olesya} className="main__img" />
      </div>
      <div className="team__block">
        <div className="team__info">
          <h3 className="team__subtitle">Дмитрий</h3>
          <h3 className="subtitle">
            Инструктор тренажерного зала. Персональный тренер.
          </h3>
          <h3 className="subtitle">Специализация:</h3>
          <p className="text__block">увеличение выносливости</p>
          <p className="text__block">силовые тренингиа</p>
          <p className="text__block">набор мышечной массы</p>
          <p className="text__block">
            Опыт работы 8 лет. Мастер спорта по легкой атлетике.
          </p>
        </div>
        <img src={dmitry} className="main__img" />
      </div>
    </div>
  );
}

export { Team };
