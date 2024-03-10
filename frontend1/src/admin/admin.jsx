import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { isAdmin } from "../store/dataReducer";
import FooterAdmin from "./components/FooterAdmin";
import HeaderAdmin from "./components/HeaderAdmin";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAdmin(true));
  }, []);
  return (
    <main className="admin">
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </main>
  );
};

export default Admin;
