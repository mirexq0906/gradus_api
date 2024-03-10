import React from 'react';

const ProviderInfo = () => {

    return (
        <section className="provider">
            <div className="container">
                <h3 className="heading provider__heading">Поставщикам</h3>
                <div className="provider__info">
                    <p className="provider__info-desc">Уважаемые поставщики и производители, компания «Градус Хаус» открыта сотрудничеству и с интересом рассмотрит ваше предложение.</p>
                    <p className="provider__info-desc">Условия отбора:</p>
                    <ul className="provider__info-list">
                        <li className="provider__info-item">Ваша продукция подходит к одной из наших товарных категорий, представленных на сайте</li>
                        <li className="provider__info-item">Цены на поставляемый товар являются конкурентоспособными и соответствуют требованиям наших покупателей</li>
                        <li className="provider__info-item">Бесперебойные поставки товара</li>
                    </ul>
                    <p className="provider__info-desc">Присылайте свои предложения на наш электронный адрес qwerty@mail.ru</p>
                </div>  
            </div>
        </section>
    );
};

export default ProviderInfo;