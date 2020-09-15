import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../components";
import {
  clearCart,
  removeCartItem,
  plusItem,
  minusItem,
} from "../redux/actions/cart";
import emptyCartPNG from "../assets/img/emptyCart.png";
import Button from "../components/Button";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedProducts = useMemo(
    () => Object.keys(items).map((key) => items[key].items[0]),
    [items]
  );

  const goToBackPage = () => {
    history.goBack();
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  const onRemoveItem = (name) => {
    dispatch(removeCartItem(name));
  };
  const onPlusItem = (name) => {
    dispatch(plusItem(name));
  };
  const onMinusItem = (name) => {
    dispatch(minusItem(name));
  };

  return (
    <div className="container container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">Корзина</h2>
            <div className="cart__clear" onClick={onClearCart}>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__items">
            {addedProducts.map(({ name, imageUrl }, i) => (
              <CartItem
                key={`${name + i}`}
                {...{ name, imageUrl }}
                totalPrice={items[name].totalPrice}
                totalCount={items[name].items.length}
                onRemoveItem={onRemoveItem}
                onPlusItem={onPlusItem}
                onMinusItem={onMinusItem}
              />
            ))}
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} $</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Button
                  className="button--outline go-back-btn"
                  onClick={goToBackPage}
                >
                  <svg width="8" height="15">
                    <line x1="1" y1="9" x2="8" y2="0" strokeWidth="2" />
                    <line x1="1" y1="8" x2="8" y2="15" strokeWidth="2" />
                  </svg>

                  <span>Вернуться назад</span>
                </Button>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>Корзина пустая </h2>
          <p>
            Вероятней всего,вы ничего не добавили.
            <br />
            Для того, чтобы заполнить корзину, перейди на главную страницу.
          </p>
          <img src={emptyCartPNG} alt="Empty cart" />
          <Button className="button--black " onClick={goToBackPage}>
            <svg width="8" height="15">
              <line x1="1" y1="9" x2="8" y2="0" strokeWidth="2" />
              <line x1="1" y1="8" x2="8" y2="15" strokeWidth="2" />
            </svg>
            <span>Вернуться назад</span>
          </Button>
        </div>
      )}
    </div>
  );
}
