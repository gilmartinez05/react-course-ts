import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/Cart"
import './App.scss'
import { Product } from "./interfaces/product"
import { useEffect, useState } from "react"
import { getProducts } from "./services/product"
import Header from "./components/Header"
import { ProductProvider } from "./context/productContext"


function App() {


  return (
    <ProductProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" Component={() => <Home />}>
          </Route>
          <Route path="/cart" Component={() => <Cart />}>

          </Route>
        </Routes>
      </>
    </ProductProvider>
  )
}

export default App
