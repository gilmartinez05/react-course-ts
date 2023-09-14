import { createContext, useEffect, useRef, useState } from "react";
import { Product, ProductCart } from "../interfaces/product";
import { getProducts } from "../services/product";
type ContextProps = {
    products: Product[]
    originalProducts: React.MutableRefObject<Product[]>
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    cart: ProductCart[]
    setCart: React.Dispatch<React.SetStateAction<ProductCart[]>>
}
type ContextProviderProps = {
    children: React.ReactNode
}
export const Context = createContext({} as ContextProps)

export const ProductProvider = ({ children }: ContextProviderProps) => {
    const [products, setProducts] = useState([] as Product[])
    const [cart, setCart] = useState([] as ProductCart[])
    const originalProducts = useRef<Product[]>([])

    useEffect(() => {
        getProducts().then(data => {
            originalProducts.current = data
            setProducts(data)
        })
    }, [])

    return (
        <Context.Provider value={{
            products, setProducts,
            cart, setCart, originalProducts
        }}>
            {children}
        </Context.Provider>
    )
}
