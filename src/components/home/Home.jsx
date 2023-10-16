import './Home.css'
import Card from './Cards'
import data from '../data/books'

export default function Home() {
    return (
        <>
            <div className="home">

                <div className="home_container">
                    <h2>Your Books</h2>

                    <div className="cards">
                        {data.map((book) => (
                            <Card key={book.id} title={book.title} subtitle={book.subtitle} image={book.image} price={book.price} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}