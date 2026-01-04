import React from 'react'
import {FaTrash, FaMinus, FaPlus} from 'react-icons/fa'

function CartItem({item, onRemoveFromCart, onUpdateQuantity}) {
  return (
    <div className="cart-item">
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <div className="quantity-controls">
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}><FaMinus /></button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}><FaPlus /></button>
        </div>
        <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}><FaTrash /></button>
    </div>
  )
}

export default CartItem