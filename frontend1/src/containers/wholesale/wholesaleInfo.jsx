import React from 'react';

const WholesaleInfo = () => {

    return (
        <section className="wholesale">
            <div className="container">
                <h3 className="heading wholesale__heading">Оптовым клиентам</h3>
                <div className="wholesale__info">
                    <p className="wholesale__info-desc">Купить нашу продукцию оптом и узнать подробнее об условиях можно здесь.</p>
                    <p className="wholesale__info-desc">Отдел оптовых продаж:</p>
                    <p className="wholesale__info-desc">Телефон: <a href="tel:89999999999">8 999 999 99 99</a> ( пн-пт с 9 до 18:00)</p>
                    <p className="wholesale__info-desc">E-mail: <a href="mailto:qwert@mail.ru">qwert@mail.ru</a></p>
                </div>  
            </div>
        </section>
    );
};

export default WholesaleInfo;