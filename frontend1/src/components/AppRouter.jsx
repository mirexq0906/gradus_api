import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import CategoryAddAdmin from "../admin/pages/category/categoryAddAdmin";
import CategoryAdmin from "../admin/pages/category/categoryAdmin";
import CategoryUpdateAdmin from "../admin/pages/category/categoryUpdateAdmin";
import CategoryViewAdmin from "../admin/pages/category/categoryViewAdmin";
import MainAdmin from "../admin/pages/mainAdmin";
import About from "../pages/about";
import Blog from "../pages/blog";
import Catalog from "../pages/catalog";
import Contacts from "../pages/contacts";
import Delivery from "../pages/delivery";
import Main from "../pages/main";
import Order from "../pages/order";
import Payment from "../pages/payment";
import Product from "../pages/product";
import Provider from "../pages/provider";
import Rent from "../pages/rent";
import Requisites from "../pages/requisites";
import Return from "../pages/return";
import SubCatalog from "../pages/subCatalog";
import Wholesale from "../pages/wholesale";
import { useSelector } from "react-redux";
import SubCategoryAdmin from "../admin/pages/subCategory/subCategoryAdmin";
import SubCategoryAddAdmin from "../admin/pages/subCategory/subCategoryAddAdmin";
import SubCategoryUpdateAdmin from "../admin/pages/subCategory/subCategoryUpdateAdmin";
import SubCategoryViewAdmin from "../admin/pages/subCategory/subCategoryViewAdmin";
import ProductAdmin from "../admin/pages/product/productAdmin";
import ProductAddAdmin from "../admin/pages/product/productAddAdmin";
import ProductUpdateAdmin from "../admin/pages/product/productUpdateAdmin";
import ProductViewAdmin from "../admin/pages/product/productViewAdmin";
import BlogAdmin from "../admin/pages/blog/blogAdmin";
import BlogAddAdmin from "../admin/pages/blog/blogAddAdmin";
import BlogUpdateAdmin from "../admin/pages/blog/blogUpdateAdmin";
import BlogViewAdmin from "../admin/pages/blog/blogViewAdmin";
import VideoAdmin from "../admin/pages/video/videoAdmin";
import VideoAddAdmin from "../admin/pages/video/videoAddAdmin";
import VideoUpdateAdmin from "../admin/pages/video/videoUpdateAdmin";
import VideoViewAdmin from "../admin/pages/video/videoViewAdmin";
import Registration from "../pages/registration";
import Account from "../pages/account";
import Basket from "../pages/basket";
import Favorites from "../pages/favorites";
import OrderAdmin from "../admin/pages/order/orderAdmin";
import OrderViewAdmin from "../admin/pages/order/orderViewAdmin";
import OrderUpdateAdmin from "../admin/pages/order/orderUpdateAdmin";
import Search from "../pages/search";
import Kit from "../pages/kit";
import BlogMain from "../pages/blogMain";
import CallAdmin from "../admin/pages/call/callAdmin";
import EmailAdmin from "../admin/pages/email/emailAdmin";
import BannerAdmin from "../admin/pages/banner/bannerAdmin";
import BannerAddAdmin from "../admin/pages/banner/bannerAddAdmin";
import ProductWeekAdmin from "../admin/pages/productWeek/productWeekAdmin";
import ProductWeekAddAdmin from "../admin/pages/productWeek/productWeekAddAdmin";
import KitAdmin from "../admin/pages/kit/kitAdmin";
import KitViewAdmin from "../admin/pages/kit/kitViewAdmin";

const AppRouter = () => {
  
  const auth = useSelector((state) => state.user.auth);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:slug" element={<Catalog />}/>
      <Route path="/:slug/:subcategory" element={<SubCatalog />}/>
      <Route path="/:slug/:subcategory/:product" element={<Product />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
      <Route path="/provider" element={<Provider />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/return" element={<Return />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/requisites" element={<Requisites />} />
      <Route path="/wholesale" element={<Wholesale />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Registration />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search" element={<Search />} />
      <Route path="/kit" element={<Kit />} />
      <Route path="/blog" element={<BlogMain />} />
      <Route path="/blog/:slug" element={<Blog />} />
      {/* {auth
        ? */}
        <React.Fragment>
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin" element={<MainAdmin />} />
            <Route path="/admin/category" element={<CategoryAdmin />} />
            <Route path="/admin/category/add" element={<CategoryAddAdmin />} />
            <Route path="/admin/category/view/:id" element={<CategoryViewAdmin />} />
            <Route path="/admin/category/update/:id" element={<CategoryUpdateAdmin />} />
            <Route path="/admin/subcategory" element={<SubCategoryAdmin />} />
            <Route path="/admin/subcategory/add" element={<SubCategoryAddAdmin />} />
            <Route path="/admin/subcategory/update/:id" element={<SubCategoryUpdateAdmin />} />
            <Route path="/admin/subcategory/view/:id" element={<SubCategoryViewAdmin />} />

            <Route path="/admin/product" element={<ProductAdmin />} />
            <Route path="/admin/product/add" element={<ProductAddAdmin />} />
            <Route path="/admin/product/update/:id" element={<ProductUpdateAdmin />} />
            <Route path="/admin/product/view/:id" element={<ProductViewAdmin />} />

            <Route path="/admin/blog" element={<BlogAdmin />} />
            <Route path="/admin/blog/add" element={<BlogAddAdmin />} />
            <Route path="/admin/blog/update/:id" element={<BlogUpdateAdmin />} />
            <Route path="/admin/blog/view/:id" element={<BlogViewAdmin />} />

            <Route path="/admin/video" element={<VideoAdmin />} />
            <Route path="/admin/video/add" element={<VideoAddAdmin />} />
            <Route path="/admin/video/update/:id" element={<VideoUpdateAdmin />} />
            <Route path="/admin/video/view/:id" element={<VideoViewAdmin />} />

            <Route path="/admin/order" element={<OrderAdmin />} />
            <Route path="/admin/order/update/:id" element={<OrderUpdateAdmin />} />
            <Route path="/admin/order/view/:id" element={<OrderViewAdmin />} />

            <Route path="/admin/call" element={<CallAdmin />} />

            <Route path="/admin/email" element={<EmailAdmin />} />

            <Route path="/admin/banner" element={<BannerAdmin />} />
            <Route path="/admin/banner/add" element={<BannerAddAdmin />} />

            <Route path="/admin/product-week" element={<ProductWeekAdmin />} />
            <Route path="/admin/product-week/add" element={<ProductWeekAddAdmin />} />

            <Route path="/admin/kit" element={<KitAdmin />} />
            <Route path="/admin/kit/view/:id" element={<KitViewAdmin />} />
          </Route>
        </React.Fragment>
        
      {/* //   :
      //   <Route path="/admin" element={<Navigate to="/registration" replace />} />
      // } */}

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
