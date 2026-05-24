import { createContext, useState, useEffect } from 'react'
export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
      
        return savedCart ? JSON.parse(savedCart) : []
      })

      const addToCart = (product) => {

        const existingProduct = cart.find(
          (item) => item.name === product.name
        )
      
        if (existingProduct) {
      
          setCart(
            cart.map((item) =>
              item.name === product.name
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            )
          )
      
        } else {
      
          setCart([
            ...cart,
            {
              ...product,
              quantity: 1,
            },
          ])
      
        }
      }

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove))
  }

  const increaseQuantity = (index) => {
    const updatedCart = [...cart]
  
    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1) + 1
  
    setCart(updatedCart)
  }
  
  const decreaseQuantity = (index) => {

    const updatedCart = [...cart]
  
    if (updatedCart[index].quantity > 1) {
  
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1,
      }
  
      setCart(updatedCart)
  
    } else {
  
      const filteredCart = updatedCart.filter(
        (_, i) => i !== index
      )
  
      setCart(filteredCart)
  
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
    value={{
      cart,
      setCart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
    }}>
      {children}
    </CartContext.Provider>
  )
}