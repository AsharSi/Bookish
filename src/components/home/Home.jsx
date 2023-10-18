import './Home.css'
import Books from '../books/Books'
import { Routes, Route } from 'react-router-dom'

export default function Home(props) {

    return (
        <>
            <div className="home">

                <div className="home_container">
                    <h2>Your Books</h2>

                    <div className="home_books">

                        <Routes>
                            <Route path='/' element={<Books key="programming" category='programming' />} />
                            <Route path="/books/design" element={<Books key="design" category='Design' /> } />
                            <Route path="/books/business" element={<Books key="business" category='Business' /> } />
                            <Route path="/books/management" element={<Books key="management" category='Management' /> } />
                            <Route path="/books/finance" element={<Books key="finance" category='Finance' /> } />
                            <Route path="/books/health" element={<Books key="health" category='Health' /> } />
                            <Route path="/books/medical" element={<Books key="medical" category='Medical' /> } />
                            <Route path="/books/education" element={<Books key="education" category='Education' /> } />
                            <Route path="/books/technology" element={<Books key="technology" category='Technology' /> } />
                            <Route path="/books/novel" element={<Books key="novel" category='Novel' /> } />
                            <Route path="/books/other" element={<Books key="other" category='Other' /> } />
                        </Routes>

                    </div>

                </div>
            </div>
        </>
    )
}