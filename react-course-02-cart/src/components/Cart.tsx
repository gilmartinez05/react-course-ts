import { useProducts } from "../hooks/useProducts"

export default function Cart() {
    const { cart, removeFromCart } = useProducts()
    return (
        <>
            <h1>Cart</h1>
            {
                cart.length === 0 ? <p>Cart is empty</p> :
                    cart.map((cart) => (
                        <>
                            <p>{cart.product.title}</p>
                            <span>
                                <strong> Quantity: {cart.quantity}</strong>
                                <button onClick={() => removeFromCart(cart.product)}>Remove </button>
                            </span>
                        </>
                    ))
            }
        </>
    )
}