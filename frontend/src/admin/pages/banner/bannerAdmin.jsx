import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
 
const BannerAdmin = () => {
  const banner = useSelector((state) => state.banner.banner);
  async function deleteBanner(bannerId) {
    await axios.delete(process.env.REACT_APP_SERVER + 'banners/' + bannerId);
    window.location.reload()
  }
  return (
    <section className="admin-watch">
      <div className="container">
        <Link to="/admin" className="btn-admin-back form-admin__back">Назад</Link>
        <Link to="/admin/banner/add" className="btn-admin">
          Добавить баннер
        </Link>
        <table className="admin-watch__table table-admin">
          <thead>
            <tr>
              <th>#</th>
              <th>Картинка</th>
              <th className="table-admin__head-buttons">Операции</th>
            </tr>
          </thead>
          <tbody>
            {banner?.data?.map((item) => (
              <tr key={item.id}>
                <td className="table-admin__body-id">{item.id}</td>
                <td><img src={item.img} alt="" /></td>
                <td className="table-admin__body-buttons">
                  <div className="table-admin__row-buttons">
                    <button onClick={() => deleteBanner(item.id)} className="btn table-admin__delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-basket"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BannerAdmin;