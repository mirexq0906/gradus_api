import React from 'react';

const PaymentInfo = () => {

    return (
        <section className="payment">
            <div className="container">
                <h3 className="heading payment__heading">Оплата</h3>
                <div className="payment__info">
                    <h3 className="payment__info-heading">Онлайн на сайте</h3>
                    <p className="payment__info-desc">Оплатите заказ Онлайн банковской картой.</p>
                    <p className="payment__info-desc">Сразу после оформления заказа менеджер вышлет СМС с ссылкой на оплату.</p>
                    <h3 className="payment__info-heading">При получении наличными или картой</h3>
                    <p className="payment__info-desc">Оплачивайте заказ по факту получения – картой или наличными в отделении почты, пункте выдачи транспортной компании или курьеру.</p>
                    <h3 className="payment__info-heading">В магазине наличными или картой</h3>
                    <p className="payment__info-desc">Выбрали доставку в магазин Градус Хаус в вашем городе? Оплатите покупку после осмотра банковской картой или наличными продавцу.</p>
                    <h3 className="payment__info-heading">Счет</h3>
                    <p className="payment__info-desc">Для организаций и юридических лиц мы можем выставить счет на оплату.</p>
                </div>  
            </div>
        </section>
    );
};

export default PaymentInfo;