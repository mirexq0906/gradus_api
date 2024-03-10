import React from 'react';

const Advantage = () => {
    return (
        <section className="advantage">
            <div className="container">
                <ul className="advantage__list">
                    <li className="advantage__item">
                        <div className="advantage__item-img">
                            <img src="/images/advantage-icon-5.svg" alt="foto"/>
                        </div>
                        <p className="advantage__item-desc">Широкий<br/>ассортимент</p>
                    </li>
                    <li className="advantage__item">
                        <div className="advantage__item-img">
                            <img src="/images/advantage-icon-6.svg" alt="foto"/>
                        </div>
                        <p className="advantage__item-desc">Собственное<br/>производство</p>
                    </li>
                    <li className="advantage__item">
                        <div className="advantage__item-img">
                            <img src="/images/advantage-icon-4.svg" alt="foto"/>
                        </div>
                        <p className="advantage__item-desc">Гарантия<br/>возврата денег</p>
                    </li>
                    <li className="advantage__item">
                        <div className="advantage__item-img">
                            <img src="/images/advantage-icon-3.svg" alt="foto"/>
                        </div>
                        <p className="advantage__item-desc">Рассрочка без<br/>переплаты на 6 месяцев</p>
                    </li>
                    <li className="advantage__item">
                        <div className="advantage__item-img">
                            <img src="/images/advantage-icon-2.svg" alt="foto"/>
                        </div>
                        <p className="advantage__item-desc">Быстрая доставка в<br/>любой город России</p>
                    </li>
                    <li className="advantage__item">
                        <div className="advantage__item-img">
                            <img src="/images/advantage-icon-1.svg" alt="foto"/>
                        </div>
                        <p className="advantage__item-desc">Гарантия<br/>качества</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Advantage;