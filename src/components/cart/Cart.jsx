import { useState } from 'react';
import './Cart.css'

export default function Cart(props) {
    const [number, setNumber] = useState(1);

    const subtract = () => {
        setNumber(number - 1);
        console.log(number);
    }

    const add = () => {
        setNumber(number + 1);
        console.log(number);
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

                        <button className='cart_remove_btn'>Remove</button>
                    </div>

                </div>
            </div>
        </>
    )
}