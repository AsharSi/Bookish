import './CartPage.css'
import Cart from './Cart'
import data from '../data/cart'

export default function CartPage() {

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
                            <p className='cart_total'> $0.00</p>
                            <button className='cart_btn' >Proceed to Checkout</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}