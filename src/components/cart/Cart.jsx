import { useState } from 'react';
import './Cart.css'
import { useContext } from 'react';
import noteContext from '../context/noteContext';

export default function Cart(props) {
    const context = useContext(noteContext)
    const { cartItems, setCartItems, totalCost, setTotalCost } = context;
    
    const [number, setNumber] = useState(1);
    
    const subtract = () => {
        setNumber(number - 1);
        let total = totalCost - parseFloat(props.price.slice(1))
        setTotalCost(total)

        if (number <= 0) {
            setNumber(0)

            const newCart = cartItems.filter((item) => item.title !== props.title)
            setCartItems(newCart)
        }

        console.log(number);
    }

    const add = () => {
        setNumber(number + 1);
        let total = totalCost + parseFloat(props.price.slice(1))
        setTotalCost(total)

        console.log(number);
    }

    const removeItem = () => {
        const newCart = cartItems.filter((item) => item.title !== props.title)
        setCartItems(newCart)
        localStorage.setItem('cartItems', JSON.stringify(newCart))
    }

    return (
        <>
            <div className="cart">
                <div className="cart_image">
                    <img src={props.image} alt="" />
                </div>
                <div className="cart_content">
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                    <p className='cart_price'>{props.price}</p>

                    <div className="cart_quantity">
                        <button className='cart_quantity_btn' onClick={subtract} disabled={number <= 0} >-</button>
                        <p className='cart_number'>{number}</p>
                        <button className='cart_quantity_btn' onClick={add}>+</button>

                        <button className='cart_remove_btn' onClick={removeItem}>Remove</button>
                    </div>

                </div>
            </div>
        </>
    )
}