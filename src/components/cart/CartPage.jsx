import './CartPage.css'
import Cart from './Cart'
import { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'

export default function CartPage() {
    const context = useContext(noteContext)
    const { cartItems, totalCost, setTotalCost } = context;

    const data = cartItems;

    useEffect(() => {
        let total = 0
        if (data !== null) {
            data.map((item) => {
                total += parseFloat(item.price.slice(1))

                return total
            })
        }
        setTotalCost(total.toFixed(2))
    });

    return (
        <>
            <div className="cartpage">

                <div className="cartpage_container">
                    <h2>Your Cart</h2>

                    <div className="cart_container">
                        <div className="cart_item_container">
                            {data.map((book) => (
                                <Cart key={book.isbn13} title={book.title} subtitle={book.subtitle} image={book.image} price={book.price} />
                            ))}
                        </div>

                        <div className="cart_total_container">
                            <h3>Subtotal</h3>
                            <p className='cart_total'> ${totalCost}</p>
                            <button className='cart_btn' >Proceed to Checkout</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}