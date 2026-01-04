import { useState } from 'react'
import './App.css'
import { useCart } from './hooks/useCart'
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const { cart, total, addToCart, removeFromCart, updateQuantity } = useCart();

  return (
    <>
        <div className="app">
          <header>
            <h1>Shopping Cart</h1>
          </header>
          <main>
            <div className="products">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
            <Cart cart={cart} onRemoveFromCart={removeFromCart} onUpdateQuantity={updateQuantity} total={total} />
          </main>
        </div>
    </>
  )
}

export default App
