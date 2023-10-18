import { useState } from 'react'
import './Navbar.css'
import Hamburger from './hamburger/Hamburger'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'
import { BsLayoutTextSidebar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Navbar() {

    let [navOpen, setNavOpen] = useState(false);

    let toggleNav = () => {
        (navOpen) ? (
            document.getElementById('MobileNavigation').classList.remove('active')
            // document.getElementById('hamburger').classList.remove('active')
        ) : (
            document.getElementById('MobileNavigation').classList.add('active')
            // document.getElementById('hamburger').classList.add('active')
            )

        setNavOpen(!navOpen)
    }

    const openSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('openSidebar')
    }

    return (
        <>
            <nav>
                <div>
                    <BsLayoutTextSidebar className='BsSidebar' onClick={openSidebar} />
                    
                    <a id="nav_brand" href='/'>
                        Bookish
                    </a>
                </div>

                <div id="hamburger" onClick={toggleNav}>
                    <Hamburger />
                </div>

                <Navigation />

                <div id="MobileNavigation" className=''>
                    <MobileNavigation />
                </div>
            </nav>

            <div className="bookCategory">
                <div className="bookCategory_container">
                    <div className="bookCategory_list">
                        <Link to="/books/design">Design</Link>
                        <Link to="/books/business">Business</Link>
                        <Link to="/books/management">Management</Link>
                        <Link to="/books/finance">Finance</Link>
                        <Link to="/books/health">Health</Link>
                        <Link to="/books/medical">Medical</Link>
                        <Link to="/books/education">Education</Link>
                        <Link to="/books/technology">Technology</Link>
                        <Link to="/books/novel">Novel</Link>
                        <Link to="/books/other">Other</Link>
                    </div>
                </div>
            </div>
        </>
    )
}