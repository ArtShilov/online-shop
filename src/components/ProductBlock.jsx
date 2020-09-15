import React from 'react'
import Button from './Button'
// import plusPNG from '../assets/img/plus.png'

export default function ProductBlock({imageUrl,name,price,onClickAddProduct,addedCount}) {

    const onAddProduct = () => {
    const obj = {
      name,
      imageUrl,
      price,
    };
    onClickAddProduct(obj);
  };


  return (
    <div className="product-block">
    <img className="product-block__image" src={`https://murmuring-tor-81614.herokuapp.com/${imageUrl}`} alt="product" />
    <h4 className="product-block__title">{name}</h4>
    <div className="product-block__bottom">
      <div className="product-block__price">{price} $</div>
      <Button onClick={onAddProduct} className="button--add button--outline">
      
        <span>Добавить</span>
        {addedCount ? <i>{addedCount}</i> : null}
      </Button>
    </div>
  </div>
  )
}
