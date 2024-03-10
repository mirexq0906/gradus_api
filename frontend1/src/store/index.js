import {createStore, combineReducers, applyMiddleware} from "redux"
import {dataReducer} from "./dataReducer.js";
import {categoryReducer} from "./categoryReducer.js";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { subCategoryReducer } from "./subCategoryReducer.js";
import { productReducer } from "./productReducer.js";
import { blogReducer } from "./blogReducer.js";
import { videoReducer } from "./videoReducer.js";
import { userReducer } from "./userReducer.js";
import { modalsReducer } from "./modalsReducer.js";
import { orderReducer } from "./orderReducer.js";
import { kitReducer } from "./kitReducer.js";
import { bannerReducer } from "./bannerReducer.js";


const rootReducer = combineReducers({
    data: dataReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    product: productReducer,
    blog: blogReducer,
    video: videoReducer,
    user: userReducer,
    modals: modalsReducer,
    order: orderReducer,
    kit: kitReducer,
    banner: bannerReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))