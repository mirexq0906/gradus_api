import React from 'react';

const RentInfo = () => {

    return (
        <section className="rent">
            <div className="container">
                <h3 className="heading rent__heading">Арендодателям</h3>
                <div className="rent__info">
                    <p className="rent__info-desc">Розничная сеть магазинов «Градус Хаус» всвязи с постоянным развитием, заинтересована в долгосрочной аренде помещений под новые торговые точки. Мы приглашаем к сотрудничеству арендодателей и посредников и рассматриваем помещения со следующими данными:</p>
                    <ul className="rent__info-list">
                        <li className="rent__info-item">Города с населением от 300 тыс. человек</li>
                        <li className="rent__info-item">Торговые центры, расположенные на первой линии домов</li>
                        <li className="rent__info-item">Наличие большой парковки у ТЦ</li>
                        <li className="rent__info-item">Площадь помещения: от 30 до 40 кв.м.</li>
                        <li className="rent__info-item">Наличие места для рекламной вывески: внутри ТЦ над входом в помещение – обязательно, снаружи на фасаде ТЦ – желательно.</li>
                        <li className="rent__info-item">Иные нюансы расположения: только основные коридоры ТЦ, отсутствие ограничивающих обзор объектов (эскалаторы, высокие островные конструкции и т. д.)</li>
                    </ul>
                    <p className="rent__info-desc">Присылайте свои предложения на наш электронный адрес: qwerty@mail.ru</p>
                </div>  
            </div>
        </section>
    );
};

export default RentInfo;