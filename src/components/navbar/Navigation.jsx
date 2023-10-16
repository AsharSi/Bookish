import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <div id="nav_links">
                <ul>
                    <li className='nav_link'><Link to="/">Home</Link></li>
                    {/* <li className='nav_link'><Link to="/">Books</Link></li> */}
                    <li className='nav_link'><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </>
    )
}