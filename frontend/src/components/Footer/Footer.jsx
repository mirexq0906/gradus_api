import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo-wrapper">
                        <img className="footer__logo" src="/images/logo-footer.png" alt="foto"/>
                    </div>
                    <ul className="footer__list-company">
                        <li className="footer__heading-company">
                            Компания
                        </li>
                        <li className="footer__item-company">
                            <a href="/about" className="footer__link-company">О нас</a>
                        </li>
                        <li className="footer__item-company">
                            <a href="/requisites" className="footer__link-company">Реквизиты</a>
                        </li>
                        {/* <li className="footer__item-company">
                            <a href="/#" className="footer__link-company">Правовая информация</a>
                        </li> */}
                        <li className="footer__item-company">
                            <a href="/contacts" className="footer__link-company">Контакты</a>
                        </li>
                        {/* <li className="footer__item-company">
                            <a href="/#" className="footer__link-company">Вакансии</a>
                        </li> */}
                    </ul>
                    <ul className="footer__list-buyer">
                        <li className="footer__heading-buyer">
                            Покупатель
                        </li>
                        <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/order">Как заказать</a>
                        </li>
                        <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/delivery">Доставка</a>
                        </li>
                        <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/payment">Оплата</a>
                        </li>
                        {/* <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/#">Подписка на рассылку</a>
                        </li> */}
                        <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/return">Возврат товара</a>
                        </li>
                        <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/blog">Блог</a>
                        </li>
                        {/* <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/#">Акции</a>
                        </li> */}
                        {/* <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/#">Сравнение товаров </a>
                        </li> */}
                        {/* <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/#">Торговые марки</a>
                        </li> */}
                        {/* <li className="footer__item-buyer">
                            <a className="footer__link-company" href="/#">Вопрос-ответ</a>
                        </li> */}
                    </ul>
                    <ul className="footer__list-opt">
                        <li className="footer__heading-opt">
                            Оптовый покупатель
                        </li>
                        <li className="footer__item-opt">
                            <a href="/#" className="footer__link-opt">Регистрация</a>
                        </li>
                        <li className="footer__item-opt">
                            <a href="/wholesale" className="footer__link-opt">Оптовым клиентам</a>
                        </li>
                    </ul>
                    <ul className="footer__list-business">
                        <li className="footer__heading-business">
                            Бизнес
                        </li>
                        <li className="footer__item-business">
                            <a href="/provider" className="footer__link-business">Поставщикам</a>
                        </li>
                        <li className="footer__item-business">
                            <a href="/rent" className="footer__link-business">Арендодателям</a>
                        </li>
                    </ul>
                    <ul className="footer__list-market">
                        <li className="footer__heading-market">
                            Мы на маркетплейсах:
                        </li>
                        <li className="footer__item-market">
                            <a href="/#" className="footer__link-market">
                                <img src="/images/ozon.png" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-market">
                                <img src="/images/wb.png" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-market">
                                <img src="/images/market.png" alt="foto"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list-social">
                        <li className="footer__heading-social">
                            Наши соц сети:
                        </li>
                        <li className="footer__item-social">
                            <a href="/#" className="footer__link-social">
                                <img src="/images/vk.svg" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-social">
                                <img src="/images/classmates.svg" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-social">
                                <img src="/images/youtube.svg" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-social">
                                <img src="/images/telegram.svg" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-social">
                                <img src="/images/dzen.svg" alt="foto"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list-card">
                        <li className="footer__heading-card">
                            Способы оплаты:
                        </li>
                        <li className="footer__item-card">
                            <a href="/#" className="footer__link-card">
                                <img src="/images/visa.png" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-card">
                                <img src="/images/master.png" alt="foto"/>
                            </a>
                            <a href="/#" className="footer__link-card">
                                <img src="/images/mir.png" alt="foto"/>
                            </a>
                        </li>
                    </ul>
                    <p className="footer__copyright">
                        © 2022 gradushaus.ru Все права защищены.<br/>Использование материалов разрешено только с согласия правообладателей. Полное или частичное копирование сайта запрещено и преследуется по закону. ИНН 432500888349  ОГРНИП 314744919000039
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;