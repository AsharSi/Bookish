import './Cards.css';
import { useContext } from 'react';
import noteContext from '../context/noteContext';

export default function Cards(props) {
    const context = useContext(noteContext)
    const { cartItems, setCartItems } = context;

    const addToCart = () => {
        const book = {
            title: props.title,
            subtitle: props.subtitle,
            price: props.price,
            image: props.image
        }

        if (cartItems === null) {
            setCartItems([book])
            localStorage.setItem('cartItems', JSON.stringify([book]))
        } else {
            setCartItems([...cartItems, book])
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, book]))
        }
    }

    return (
        <>
            <div className="card">
                <div className="card_image">
                    <img src={props.image} alt="" />
                </div>
                <div className="card_content">
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                    <p className='card_price'>{props.price}</p>

                    <div className="card_buttons">
                        <button className="card_button" onClick={addToCart}>Add to cart</button>
                        <button className="card_button">Buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}