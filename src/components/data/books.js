import Axios from "axios";
import { useState } from "react";

const [data, setData] = useState([]);

async function getBooks() {
    try {
        const url = 'https://api.itbook.store/1.0/search/javascript'
        const response = await axios.get(url)
        console.log(response.data.books)
        setData(response.data.books)
    } catch (error) {
        console.error(error)
    }
}

useEffect(() => {
    getBooks()
}, [])

export default data;