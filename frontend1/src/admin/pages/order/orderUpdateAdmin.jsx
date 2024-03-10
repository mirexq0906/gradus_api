import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { fetchOneOrder } from "../../../API/OrderService";
const OrderUpdateAdmin = () => {
  const params = useParams();
  const [status, setStatus] = useState("");

  async function FetchOrder() {
    const response = await fetchOneOrder(params.id);
    setStatus(response.status);
  }
  useEffect(() => {
    FetchOrder();
  }, []);
  async function updateOrder(e) {
    e.preventDefault();
    const data = {}
    data['status'] = status
    await axios.put( process.env.REACT_APP_SERVER + 'orders/'+ params.id, data , { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}} );
    window.location.href = "/admin/order";
  }

  return (
    <section className="admin-update">
      <div className="container">
        <div className="form-admin">
          <Link to="/admin/order" className="btn-admin-back form-admin__back">
            Назад
          </Link>
          <h1 className="form-admin__heading heading-admin">Обновить статус</h1>
          <form>
            <div className="admin-update__inputs">
              <input
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="input-admin"
                type="text"
                placeholder="Статус заказа"
              />
              <button onClick={updateOrder} className="btn-admin" type="submit">
                Обновить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderUpdateAdmin;
