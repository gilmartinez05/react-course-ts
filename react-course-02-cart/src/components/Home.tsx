//Lista de productos 
// Que voy a poder agregar al carrito, cuando selecciona agregar nuevamente , aumentara la cantidad en el carrito
// Voy a poder darl clic al producto y me va llevar a uan descripcion de ese producto
import { useContext, useEffect, useState } from 'react'
import { getProducts } from '../services/product'
import { Product } from '../interfaces/product'
import ProductItem from './ProductItem'
import { Context } from '../context/productContext'
import { useProducts } from '../hooks/useProducts'


export default function Home() {

    const { products } = useProducts()

    return (
        <>
            <h1>Home</h1>
            <div className='product-list'>
                {
                    products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))
                }
            </div>

        </>
    )
}