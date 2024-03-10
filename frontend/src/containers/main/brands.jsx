import React from 'react';

const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <div className="brands__top">
                    <h3 className="brands__heading heading">
                        <img src="/images/brands-icon.svg" alt="foto"/>
                        Наши бренды
                    </h3>
                    <span className="brands__watch watch">
                        Смотреть всё
                        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 8L5.25 4.5L1.25 1" stroke="#323232" strokeWidth="2" strokeLinecap="round"strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
                <ul className="brands__list">
                    <li className="brands__item">
                        <img src="/images/bravo-logo.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/brgmann-logo.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/finlandia-logo.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/logobavaria.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/logobulat-1_1531992413_255.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/logo-kanzler.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/logoslavjanka.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/merkel-logo.webp" alt="" />
                    </li>
                    <li className="brands__item">
                        <img src="/images/platon-logo.webp" alt="" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Brands;