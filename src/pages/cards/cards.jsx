import { useState } from "react";
import { Card } from "../../components/card/card";
import "./cards.css";

const cards = [
  {
    name: "Абонемент “SILVER” - 19 000 ₽",
    cardClass: "card__image-block--silver",
    info: [
      { title: "Срок действия:", items: ["12 месяцев", "60 дней заморозки"] },
      {
        title: "Время посещения:",
        items: ["пн-пт 7:00-23:00", "сб-вс 7:00-22:00"],
      },
    ],
  },
  {
    name: "Абонемент “PREMIUM” - 25 000 ₽",
    cardClass: "card__image-block--black",
    info: [
      { title: "Срок действия:", items: ["12 месяцев", "60 дней заморозки"] },
      {
        title: "Время посещения:",
        items: ["пн-пт 7:00-23:00", "сб-вс 7:00-22:00"],
      },
      {
        title: "Информация:",
        items: ["Блок вводных занятий", "Комплект полотенец"],
      },
    ],
  },
  {
    name: "Абонемент “ДЕТСКИЙ” - 18 000 ₽",
    cardClass: "card__image-block--green",
    info: [
      { title: "Срок действия:", items: ["12 месяцев", "60 дней заморозки"] },
      {
        title: "Время посещения:",
        items: ["пн-вс 9:00-21:00"],
      },
      {
        title: "Информация:",
        items: ["от 4 до 14 лет", "Блок вводных занятий", "Комплект полотенец"],
      },
    ],
  },
  {
    name: "Абонемент “ДНЕВНОЙ” - 18 000 ₽",
    cardClass: "card__image-block--white",
    info: [
      { title: "Срок действия:", items: ["12 месяцев", "60 дней заморозки"] },
      {
        title: "Время посещения:",
        items: ["пн-пт 7:00-17:00"],
      },
      {
        title: "Информация:",
        items: ["Блок вводных занятий", "Комплект полотенец"],
      },
    ],
  },
];

function Cards() {
  const [currentCard, setCurrentCard] = useState("");

  function closePopup(e) {
    e.preventDefault();
    setCurrentCard("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentCard("");
  }

  return (
    <>
      <div className="cards">
        {cards.map((card) => (
          <Card
            setCurrentCard={setCurrentCard}
            key={card.name}
            name={card.name}
            cardClass={card.cardClass}
            info={card.info}
          />
        ))}
      </div>
      <div className={`modal ${currentCard ? "modal--active" : ""}`}>
        <div className="popup">
          <h3 className="popup__title">Заказать абонемент</h3>
          <p className="popup__text">
            Оставьте свой номер телефона и мы свяжемся с вами
          </p>
          <form
            target="_blank"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLO9wGgC2gptaqWaQA_EMynlELsGXa9_VUdZGH66FrSEcLTg/formResponse"
            className="popup__form"
          >
            <input
              name="entry.1387748973"
              type="text"
              className="popup__input"
              placeholder="Имя"
            />
            <input
              name="entry.920210777"
              type="text"
              className="popup__input"
              placeholder="Номер телефона"
            />
            <input
              name="entry.1117897522"
              type="text"
              className="popup__input--disabled"
              placeholder="Карта"
              value={currentCard}
            />
            <div style={{ display: "flex" , alignItems:"start"}}>
              <input
                type="checkbox"
                name="checkbox"
                // className="popup__input--disabled"
              />
              <label
                style={{ color: "#fff", fontFamily: "roboto" }}
                htmlFor="checkbox"
              >
                Согласие на обработку персональных данных
              </label>
            </div>
            <button type="submit" className="popup__button">
              Отправить
            </button>
            <button
              onClick={closePopup}
              className="popup__button popup__button--transparent"
            >
              Закрыть
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export { Cards };
