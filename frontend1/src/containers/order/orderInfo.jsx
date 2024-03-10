import React from 'react';

const OrderInfo = () => {

    return (
        <section className="order">
            <div className="container">
                <h3 className="heading order__heading">Как заказать</h3>
                <div className="order__info">
                    <h3 className="order__info-heading">Оформить заказ онлайн на сайте</h3>
                    <ol className="order__info-list">
                        <li className="order__info-item">В каталоге сайта найдите товар, который хотите приобрести и кликните по кнопке “В корзину”</li>
                        <li className="order__info-item">Перейдите в корзину и нажмите “Оформить заказ”</li>
                        <li className="order__info-item">Заполните контактные данные и нажмите “Продолжить”</li>
                        <li className="order__info-item">Выберите способ доставки - нажмите “Продолжить”</li>
                        <li className="order__info-item">Выберите способ оплаты и нажмите “Оформить заказ”</li>
                    </ol>

                    <p className="order__info-desc">Менеджер позвонит вам в течение 15 минут для подтверждения заказа. </p>
                    <p className="order__info-desc">Уточнить информацию или изменить детали заказа можно у менеджера при звонке. </p>
                    
                    <h3 className="order__info-heading">Оформить заказ онлайн на сайте</h3>
                    <p className="order__info-desc">Звоните по телефону горячей линии: 8 999 999 99 99. Или нажмите на кнопку Заказать звонок. Мы перезвоним. </p>
                    <p className="order__info-desc">Операторы оформят заказ, просто сообщите ваши данные и пожелания. </p>
                    <p className="order__info-desc">Горячая линия работает с 09:00 до 21:00 по московскому времени. </p>

                    <h3 className="order__info-heading">Написать в онлайн-чат</h3>
                    <p className="order__info-desc">Наш оператор на связи в онлайн-чате на сайте с 07:00 до 23:00 по московскому времени. </p>
                    <p className="order__info-desc">Напишите в чат ваши пожелания для заказа и контактные данные.</p>
                </div>  
            </div>
        </section>
    );
};

export default OrderInfo;