import React, { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import AppRouter from './components/AppRouter';
import './style/style.scss'
import { fetchCategory } from './API/CategoryService';
import { fetchSubCategory } from './API/SubCategoryService';
import { fetchProduct } from './API/ProductService';
import { fetchBlog } from './API/BlogService';
import { fetchVideo } from './API/VideoService';
import ModalInfo from './components/ModalInfo';
import ModalCall from './components/ModalCall';
import { fetchBanner } from './API/BannerService';
import { fetchProductsWeek } from './API/productsWeekService';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
function App() {
    const dispatch = useDispatch();
    const isAdmin = useSelector(state => state.data.admin)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
            try {
              await dispatch(fetchCategory());
              await dispatch(fetchSubCategory({ limit: "300" }));
              await dispatch(fetchProduct({ limit: "300" }));
              await dispatch(fetchBlog({ limit: "300" }));
              await dispatch(fetchBanner());
              await dispatch(fetchVideo({ limit: "300" }));
              await dispatch(fetchProductsWeek());
      
              setLoading(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              setLoading(false); 
            }
          };
      
          fetchData();
    }, [])


    if (loading) {
        return <div className="loader"></div>
    } else {
        return (

            <React.Fragment>

                <BrowserRouter>
                    {isAdmin
                        ?
                        ''
                        :
                        <Header />
                    }
                    <AppRouter />
                    {isAdmin
                        ?
                        <ModalInfo />
                        :
                        <React.Fragment>
                            <Footer />
                            <ModalInfo />
                            <ModalCall />
                        </React.Fragment>

                    }
                </BrowserRouter>


            </React.Fragment>

        );
    }

}

export default App;
