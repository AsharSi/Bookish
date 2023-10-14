import { useState } from 'react'
import './Navbar.css'
import Hamburger from './hamburger/Hamburger'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

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

    return (
        <>
            <nav>
                <div>
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
        </>
    )
}