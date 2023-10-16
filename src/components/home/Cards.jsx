import './Cards.css'

export default function Cards(props) {
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
                    <button className="card_button">Add to cart</button>
                    <button className="card_button">Buy now</button>
                </div>
                </div>
            </div>
        </>
    )
}