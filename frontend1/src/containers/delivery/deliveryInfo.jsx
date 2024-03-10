import React from 'react';

const DeliveryInfo = () => {

    return (
        <section className="delivery">
            <div className="container">
                <h3 className="heading delivery__heading">Доставка</h3>
                <div className="delivery__info">
                    <h3 className="delivery__info-heading">Доставка Почтой России или ТК</h3>
                    <p className="delivery__info-desc">Доставим заказ в отделении почты России или пункт выдачи транспортной компании.</p>
                    <p className="delivery__info-desc">Работаем с крупнейшими транспортными компаниями и курьерскими службами: КИТ, ПЭК, ДПД, СДЕК, Деловые Линии, Энергия, Гермес, ОЗОН и другие.</p>
                    <p className="delivery__info-desc">Менеджер при подтверждении заказа поможет выбрать подходящую транспортную службу, рассчитает точную стоимость и подскажет сроки доставки.</p>
                    <p className="delivery__info-desc">Трек-номер для отслеживания вышлем в смс, когда отправим заказ. Отслеживайте заказ на сайте транспортной компании.</p>
                    <h3 className="delivery__info-heading">Доставка курьером</h3>
                    <p className="delivery__info-desc">Курьер доставит до вашего дома или квартиры тяжёлый самогонный аппарат, автоклав или станок. </p>
                    <p className="delivery__info-desc">Выберите доставку курьером при заказе на сайте или сообщите об этом менеджеру. Мы поможем подобрать самый удобный и выгодный вариант.</p>
                    <h3 className="delivery__info-heading">Самовывоз из магазина</h3>
                    <p className="delivery__info-desc">Купите понравившийся товар в фирменном магазине Градус Хаус в вашем городе. Или оформляйте доставку в магазин.</p>
                    <p className="delivery__info-desc">Магазины розничной сети Градус Хаус есть уже в 8 городах России: Москва, Санкт-Петербург, Ульяновск, Киров, Воронеж, Саратов, Волгоград и Челябинск.</p>
                    <p className="delivery__info-desc">Контакты и информацию о режиме работы магазинов смотрите в разделе Контакты.</p>
                </div>
            </div>
        </section>
    );
};

export default DeliveryInfo;