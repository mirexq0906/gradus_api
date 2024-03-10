import React from 'react';

const ReturnInfo = () => {

    return (
        <section className="return">
            <div className="container">
                <h3 className="heading return__heading">Возврат товара</h3>
                <div className="return__info">
                    <p className="return__info-desc">Вы можете обменять или вернуть товар в течение 14 дней с момента покупки.</p>
                    <p className="return__info-desc">Правила возврата:</p>
                    <ul className="return__info-list">
                        <li className="return__info-item">товар не был в употреблении, нет следов эксплуатации;</li>
                        <li className="return__info-item">товар надлежащего качества;</li>
                        <li className="return__info-item">имеется чек.</li>
                    </ul>
                    <p className="return__info-desc">Для осуществления возврата позвоните по телефону горячей линии  8 999 999 99 99 в рабочее время с 9:00 до 21:00 по московскому времени.</p>
                    <p className="return__info-desc">Или напишите в онлайн-чат. Оператор ответит с 7:00 до 23:00 по московскому времени.</p>
                    <p className="return__info-desc">Внимание:</p>
                    <ul className="return__info-list">
                        <li className="return__info-item">подарочные сертификаты возврату не подлежат;</li>
                        <li className="return__info-item">в случае возврата качественных товаров по причине неподходящего размера, возврату подлежит только стоимость товаров. Стоимость доставки не компенсируется.</li>
                    </ul>
                </div>  
            </div>
        </section>
    );
};

export default ReturnInfo;