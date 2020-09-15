import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products";
import { ProductBlock } from "../components/";
import { addProductToCart } from "../redux/actions/cart";

export default function Home() {
  
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart.items);
  const { items } = useSelector(({ products }) => products);
  const appGetDealers = window.getDealers;
  
  useEffect(() => {
    dispatch(fetchProducts(appGetDealers()));
  }, [dispatch,appGetDealers]);

  const handleAddProductToCart = (obj) => {
    dispatch(addProductToCart(obj));
  };

  return (
    <div className="container">
      <h2 className="content__title"> Наши продукты </h2>
      <div className="content__items">
        {items
          ? items.map((obj, i) => {
              const { name, price, image } = obj;
              return (
                <ProductBlock
                  key={`${name + i}`}
                  {...{ name, price }}
                  imageUrl={image}
                  onClickAddProduct={handleAddProductToCart}
                  addedCount={cartItems[obj.name] && cartItems[obj.name].items.length}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
