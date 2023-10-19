import {useState, useEffect } from 'react'  
import Card from './Cards'
import './Books.css'
import axios from 'axios'

export default function Books(props) {

    const [data, setData] = useState([])

    async function getBooks() {
        try {
            const url = `https://api.itbook.store/1.0/search/${props.category}`
            const response = await axios.get(url)
            console.log(response.data.books)
            setData(response.data.books)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getBooks()
    });

    return (
        <>
            <div className="cards">
                {data.map((book) => (
                    <Card key={book.isbn13} title={book.title} subtitle={book.subtitle} image={book.image} price={book.price} />
                ))}
            </div>

        </>
    )
}
