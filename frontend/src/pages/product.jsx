import React, { useState, useEffect } from 'react';
import AboutProduct from '../containers/product/aboutProduct';
import Hero from "../containers/product/hero";
import OtherProducts from '../containers/product/otherProducts';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Rating } from 'primereact/rating';
import { Dialog } from 'primereact/dialog';
import { fetchOneProduct, fetchRating } from "../API/ProductService";
const Product = () => {
  const params = useParams();
  const products = useSelector((state) => state.product.product);
  const [product, setProduct] = useState({ gallery: [] });

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [rating, setRating] = useState();
  
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  async function productItem() {
    const response = await fetchOneProduct(params.product);
    setProduct(response.data);
  }
  async function changeRating() {
    
    try{
      const data = {
        rating,
        content,
        title,
        product_id: product.id
      }
      const response = await fetchRating(data);
      console.log(response)
      setMessage(response.message)
      setVisible(true)
    }
    catch(error) {
      setMessage(error)
      setVisible(true)
    }
  }

  useEffect(() => {
    productItem();
  }, []);
  // useEffect(() => {
  //   for (let i = 0; i < products.length; i++) {
  //     if (products[i].url ==  `/${params.slug}/${params.subcategory}/${params.product}`) {
  //         setProduct(products[i]);
  //     }
  //   }

  // }, [products, params]);

  return (
    <main className={"page-product"}>
      <Hero product={product} />
      <AboutProduct product={product} />
      {/* <OtherProducts product={product} /> */}
      <section className={"rewiews"}>
        <h3>Оставьте отзыв для товара:</h3>
        <input type="text" placeholder='Название' onChange={(e) => setTitle(e.target.value)} value={title} />
        <input type="text" placeholder='Отзыв' onChange={(e) => setContent(e.target.value)} value={content} />
        <Rating value={rating} onChange={(e) => setRating(e.value)} cancel={false} />
        <button onClick={changeRating}>Отправить отзыв</button>
      </section>
      <Dialog modal className='w-screen  ' header="Сообщение" visible={visible} style={{maxWidth: '650px'  }} onHide={() => setVisible(false)}>
      <div className="p-3">
          {message}
          </div>
      </Dialog>
    </main>
  );
};

export default Product;