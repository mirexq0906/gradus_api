const dopsItems = [
    {
        sort: 1,
        id: 482238,
        name: "Притопочный лист",
        image: "/images/kit/sale-dop-1.jpg",
        webp: "/images/kit/sale-dop-1.webp",
        kitImage: "/images/kit/sale-kit-dop-1.png",
        kitWebp: "/images/kit/sale-kit-dop-1.webp",
        info: "Стальной округлый лист для защиты напольного покрытия от искр, углей и сажи.Попадая на него, искры гаснут, а угли не пачкают пол, поэтому снижается риск возгорания и сохраняется чистота в помещении.",
        selected: false,
        price: 900,
        oldPrice: 1000
    },
    {
        sort: 2,
        id: 482226,
        name: "Переноска для дров",
        image: "/images/kit/sale-dop-2.jpg",
        webp: "/images/kit/sale-dop-2.webp",
        kitImage: "/images/kit/sale-kit-dop-2.png",
        kitWebp: "/images/kit/sale-kit-dop-2.webp",
        info: "Переноска с округлой широкой ручкой поможет перенести дрова ещё быстрее и удобнее! Металлическая складная конструкция не сломается и не займёт много места. Дровница просто необходима при переноске дров с улицы— поберегите спину, суставы и руки!",
        selected: false,
        price: 900,
        oldPrice: 1000
    },
    {
        sort: 3,
        id: 482229,
        name: "Кочерга",
        image: "/images/kit/sale-dop-3.jpg",
        webp: "/images/kit/sale-dop-3.webp",
        kitImage: "/images/kit/sale-kit-dop-3.png",
        kitWebp: "/images/kit/sale-kit-dop-3.webp",
        info: "Полезное дополнение для печи, мангала или камина. Кочерга имеет зубья со всех сторон, благодаря которым уголь дробится гораздо проще. Чистите колосник и убирайте продукты длительного горения ещё проще! Изделие выполнено из толстой стали, поэтому прослужит вам целую вечность!",
        selected: false,
        price: 900,
        oldPrice: 1000
    },
    {
        sort: 4,
        id: 482227,
        name: "Дровница",
        image: "/images/kit/sale-dop-4.jpg",
        webp: "/images/kit/sale-dop-4.webp",
        kitImage: "/images/kit/sale-kit-dop-4.png",
        kitWebp: "/images/kit/sale-kit-dop-4.webp",
        info: "Стационарная подставка для хранения дров рядом с печью или камином. Дровницу удобно переносить, благодаря ручкам и небольшим размерам.",
        selected: false,
        price: 900,
        oldPrice: 1000
    },
    {
        sort: 6,
        id: 482574,
        name: "Теплообменник",
        img: "/images/kit/sale-dop-7.png",
        webp: "/images/kit/sale-dop-7.webp",
        kitImage: "/images/kit/sale-kit-dop-7.png",
        kitWebp: "/images/kit/sale-kit-dop-7.webp",
        info:  "Представляет из себя полую закрытую ёмкость, к которой подсоединяются трубы или шланги. Быстрый нагрев происходит за счёт горячих газов. Благодаря разнице температур между теплообменником и баком/батареей, вода в системе циркулирует непрерывно. В результате одной печкой можно отапливать сразу несколько комнат или целую баню!",
        selected: false,
        price: 900,
        oldPrice: 1000
    },
    {
        sort: 7,
        id: 482575,
        name: "Бак",
        img: "/images/kit/sale-dop-5.png",
        webp: "/images/kit/sale-dop-5.webp",
        kitImage: "/images/kit/sale-kit-dop-5.png",
        kitWebp: "/images/kit/sale-kit-dop-5.webp",
        info: "Практичный бак пригодится в любой бане. Экономьте пространство и вешайте его на стену. Изделие полностью выполнено из нержавейки (даже петли). Куб закрыт крышкой, что значительно ускоряет нагрев воды и замедляет испарение. Продуманная ручка с термозащитой сбережёт вашу кожу от ожогов. А с удобным краном контакт с горячей водой сведён к минимуму!",
        selected: false,
        price: 900,
        oldPrice: 1000
    },
    {
        sort: 8,
        id: 482741,
        name: "Дымоход",
        img: "/images/kit/sale-dop-9.png",
        webp: "/images/kit/sale-dop-9.webp",
        kitImage: "/images/kit/sale-kit-dop-9.png",
        kitWebp: "/images/kit/sale-kit-dop-9.webp",
        info: "Трубы из стали — легче и долговечнее чугунных. Благодаря небольшому весу их удобнее закреплять в месте расположения дымохода. Комплектация предусматривает различные варианты соединения труб.",
        selected: false,
        price: 900,
        oldPrice: 1000
    }
];
const mainProductsItems = [
    {
        id: 482816,
        name: "С закрытой каменкой",
        kitImage: "/images/kit/main-kit-dop-2.png",
        kitWebp: "/images/kit/main-kit-dop-2.webp",
        selected: false,
        price: 9000,
        oldPrice: 15000
    },
    {
        id: 482815,
        name: "С открытой каменкой",
        kitImage: "/images/kit/main-kit-dop-1.png",
        kitWebp: "/images/kit/main-kit-dop-1.webp",
        selected: true,
        price: 8000,
        oldPrice: 10000
    }
];
const dops = [];
const mainProducts = [];
const defaultState = {
    dopsState: dopsItems,
    mainProductsState: mainProductsItems,
};

const ADD_DOPS_KIT = "ADD_DOPS_KIT";
const ADD_MAIN_KIT = "ADD_MAIN_KIT";
const ADD_RASSROCHKA_KIT = "RASSROCHKA_KIT";

export const kitReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DOPS_KIT:
            return { ...state, dopsState: [...action.payload] };
        case ADD_MAIN_KIT:
            return { ...state, mainProductsState: [...action.payload] };
        case ADD_RASSROCHKA_KIT:
            return { ...state, rassrochka: action.payload };
        default:
            return state;
    }
};

export const addDopKit = payload => ({ type: ADD_DOPS_KIT, payload });
export const addMainKit = payload => ({ type: ADD_MAIN_KIT, payload });