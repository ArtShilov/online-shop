import React from "react";
import Button from "./Button";

export default function CartItem({
  name,
  imageUrl,
  totalPrice,
  totalCount,
  onRemoveItem,
  onPlusItem,
  onMinusItem,
}) {
  const handleRemoveClick = () => {
    onRemoveItem(name);
  };

  const handlerPlusItem = () => {
    onPlusItem(name);
  };
  const handlerMinusItem = () => {
    onMinusItem(name);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          src={`https://murmuring-tor-81614.herokuapp.com/${imageUrl}`}
          alt="product"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
      </div>
      <div className="cart__item-count">
        <Button
          className="button--circle button--outline cart__item-count-minus "
          onClick={handlerMinusItem}
        >
          <svg width="10" height="10">
            <line x1="1" y1="5" x2="9" y2="5" strokeWidth="2" />
          </svg>
        </Button>
        <b>{totalCount}</b>
        <Button
          className="button--circle button--outline cart__item-count-plus"
          onClick={handlerPlusItem}
        >
          <svg width="10" height="10">
            <line x1="1" y1="5" x2="9" y2="5" strokeWidth="2" />
            <line x1="5" y1="1" x2="5" y2="9" strokeWidth="2" />
          </svg>
        </Button>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice.toFixed(2)} $</b>
      </div>
      <div className="cart__item-remove">
        <Button
          className="button--circle button--outline"
          onClick={handleRemoveClick}
        >
          <svg width="10" height="10">
            <line x1="1" y1="1" x2="9" y2="9" strokeWidth="2" />
            <line x1="9" y1="1" x2="1" y2="9" strokeWidth="2" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
