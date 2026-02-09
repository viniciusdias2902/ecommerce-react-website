import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products"
import useCart from "../context/CartContext"
export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const { addToCart, cartItems } = useCart()

    useEffect(() => {
        const foundProduct = getProductById(id)
        if (!foundProduct) {
            navigate("/")
            return
        }
        setProduct(foundProduct)
    }, [id])

    if (!product) {
        return <h1>Loading</h1>
    }

    const productInCart = cartItems.find((item) => item.id === product.id)
    const productQuantityLabel = productInCart ? `${productInCart.quantity}` : ""

    return <div>
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="produc-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{product.name}</h1>
                        <p className="product-detail-price">{product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to cart {productQuantityLabel ? `(${productQuantityLabel})` : ""}</button>
                    </div>
                    <div className="checkout-summary">
                        <h2 className="checkout-section-title">Total</h2>
                        <div className="checkout-total">
                            <p className="checkout-total-label">Subtotal:</p>
                            <p className="checkout-total-value">${total.toFixed(2)}</p>
                        </div>
                        <div className="checkout-total">
                            <p className="checkout-total-label">Total:</p>
                            <p className="checkout-total-value checkout-total-final">
                                ${total.toFixed(2)}
                            </p>
                        </div>
                        <button
                            className="btn btn-primary btn-large btn-block"
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}