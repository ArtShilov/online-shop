import React from 'react'
import logoPNG from '../assets/img/onlineShopLogo.png'
import cartSVG from '../assets/img/cart.svg'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useSelector } from 'react-redux'

export default function Header() {

  const {totalPrice,totalCount} = useSelector(({cart}) => cart)

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logoPNG} alt="Shop logo" />
            <div>
              <h1>Online shop</h1>
              <p>покупайте здесь и сейчас</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
            <Link to="/cart">
              <Button className="button--cart">
                <span>{totalPrice.toFixed(2)} $</span>
                <div className="button__delimiter"></div>
                <img src={cartSVG} alt="cart"></img>
                <span>{totalCount}</span>
              </Button>
            </Link>
        </div>
      </div>
    </div>

  )
}

