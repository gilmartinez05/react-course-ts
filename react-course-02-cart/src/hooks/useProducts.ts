import { useContext } from "react"
import { Context } from "../context/productContext"
import { Product } from "../interfaces/product"

export const useProducts = () => {

    const { products, setProducts, setCart, cart, originalProducts } = useContext(Context)


    const addToCart = (product: Product) => {
        const itemInCart = cart.find((item) => item.product.id === product.id)
        if (itemInCart) {
            return setCart((cart) => {
                return cart.map((item) => {
                    if (item.product.id === product.id) {
                        return { ...item, quantity: item.quantity + 1, total: item.total + product.price }
                    }
                    return item
                })
            })
        }
        setCart((cart) => {
            return [...cart, { product: product, quantity: 1, total: product.price }]
        })
    }
    const removeFromCart = (product: Product) => {
        setCart((cart) => {
            return cart.filter((item) => item.product.id !== product.id)
        })
    }
    const filter = (searchInput: string) => {
        setProducts(() => {
            const filtered = originalProducts.current.filter((product) => {
                return product.title.toLowerCase().includes(searchInput.toLowerCase() ?? '')
            })
            return filtered
        })
    }

    return {
        products, setProducts, addToCart, cart, filter, removeFromCart
    }
}
