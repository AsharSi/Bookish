import './Sidebar.css'
import { RxCross2 } from 'react-icons/rx'


export default function Sidebar() {

    const closeSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('openSidebar')
    }


    return (
        <>
            <div className="sidebar">
                <div className='sidebarButton'>
                    <div></div>
                    <div className="sidebarCloseButton" onClick={closeSidebar}>
                        <RxCross2 />
                    </div>
                </div>
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem active">
                                <i className="sidebarIcon fas fa-home"></i>
                                Link 1
                            </li>
                            <li className="sidebarListItem">
                                <i className="sidebarIcon fas fa-chart-line"></i>
                                Link 2
                            </li>
                            <li className="sidebarListItem">
                                <i className="sidebarIcon fas fa-user"></i>
                                Link 3
                            </li>
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <i className="sidebarIcon fas fa-calendar-alt"></i>
                                Link 4
                            </li>
                            <li className="sidebarListItem">
                                <i className="sidebarIcon fas fa-envelope"></i>
                                Link 5
                            </li>
                            <li className="sidebarListItem">
                                <i className="sidebarIcon fas fa-file-alt"></i>
                                Link 6
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

