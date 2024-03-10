import React from 'react';

const RequisitesInfo = () => {

    return (
        <section className="requisites">
            <div className="container">
                <h3 className="heading requisites__heading">Реквизиты компании</h3>
                <div className="requisites__info">
                    <p className="requisites__info-desc">ИП Иванов Иван Иванович</p>
                    <p className="requisites__info-desc">610000, Кировская обл., г. Киров, ул. Московская  д. 35</p>
                    <p className="requisites__info-desc">Адрес почтовый (фактический): 610000, г. Киров, ул. Московская  д. 35</p>
                    <p className="requisites__info-desc">ИНН 412300111342</p>
                    <p className="requisites__info-desc">ОГРНИП 123444234000018</p>
                </div>  
            </div>
        </section>
    );
};

export default RequisitesInfo;