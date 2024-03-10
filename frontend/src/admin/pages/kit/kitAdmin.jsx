import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchKitOrders } from "../../../API/OrderService";

const KitAdmin = () => { 
  const router = useNavigate();
  const [kitOrder, setKitOrder] = useState([]);
  async function FetchAllOrders() {
    const response = await fetchKitOrders();
    setKitOrder(response.data);
  }
  useEffect(() => {
    FetchAllOrders();
  }, []);

  async function deleteOrder(id) {
    await axios.delete(process.env.REACT_APP_SERVER + 'kit_orders/' + id, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }});
    window.location.reload();
  }

  return (
    <section className="admin-watch">
      <div className="container">
        <Link to="/admin" className="btn-admin-back form-admin__back">
          Назад
        </Link>

        <table className="admin-watch__table table-admin">
          <thead>
            <tr>
              <th>#</th>
              <th>Телефон</th>
              <th className="table-admin__head-buttons">Дата</th>
              <th className="table-admin__head-buttons">Операции</th>
            </tr>
          </thead>
          <tbody>
            {kitOrder?.map((item) => (
              <tr key={item.id}>
                <td className="table-admin__body-id">{item.id}</td>
                <td>{item.phone}</td>
                <td style={{ width: "30%" }}>{item.created_at.slice(0, 10) + " " + item.created_at.slice(11, 19)}</td>
                <td className="table-admin__body-buttons">
                  <div className="table-admin__row-buttons">
                    <button
                      onClick={() => deleteOrder(item.id)}
                      className="btn table-admin__delete"
                    >
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
                    <button
                      onClick={() => router(`/admin/kit/view/${item.id}`)}
                      className="btn table-admin__view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
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

export default KitAdmin;
