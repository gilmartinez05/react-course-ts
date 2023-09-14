import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useRef } from "react";

export default function Header() {
    const { cart, filter } = useProducts()
    const searchInput = useRef<HTMLInputElement>(null)


    const search = () => {
        if (searchInput.current) {
            console.log(searchInput.current.value)
            filter(searchInput.current.value)
        }
    }
    return (
        <>

            <header className="topbar">
                <h1>Product Store</h1>
                <nav>
                    <Link to={'/'}>
                        Home
                    </Link>
                    <Link to={'/cart'}>
                        Cart&nbsp;
                        <span className="badge">{cart.length}</span>

                    </Link>
                </nav>

            </header>
            <div className="search-bar">
                <div className="search-bar__container">
                    <input ref={searchInput} type="text" placeholder="Search..." />
                </div>
                <div>
                    <button onClick={search}>Search</button>
                </div>
            </div>
        </>

    )
}