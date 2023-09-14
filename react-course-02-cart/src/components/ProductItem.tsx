import { useProducts } from "../hooks/useProducts"
import { Product } from "../interfaces/product"

type Props = {
    product: Product
}

export default function ProductItem({ product }: Props) {

    const { addToCart } = useProducts()

    return (
        <article key={product.id}>
            <header>
                <h3>{product.title}</h3>
            </header>
            <section>
                <div style={{ display: 'flex', justifyContent: 'center', height: '100px' }}>
                    <img style={{ height: '100px' }} src={product.image} alt={product.title} />
                </div>
            </section>
            <footer>
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="primary sm" onClick={() => addToCart(product)}>Add to Cart</button>
            </footer>
        </article>
    )
}