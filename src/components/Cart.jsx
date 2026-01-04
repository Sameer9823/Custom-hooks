import React from 'react'
import CartItem from './CartItem.jsx'

function Cart({cart, onRemoveFromCart, onUpdateQuantity, total}) {
    if (cart.length === 0) {
        return <div className="cart empty">Your cart is empty.</div>
    }
  return (
    <div className='cart'>
        <h2>Your Cart</h2>
        {cart.map(item => (
            <CartItem 
                key={item.id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateQuantity={onUpdateQuantity}
            />
        ))}
        <div className="cart-total">
            <h3>Total: ${typeof total === 'string' ? total : total.toFixed(2)}</h3>
            <button className="checkout-btn">Checkout</button>
        </div>
    </div>
  )
}

export default Cart