import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {IoNotificationsOutline} from 'react-icons/io5'
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="nav-left">
                <AiOutlineMenu className='menu-button'></AiOutlineMenu>

                <div className="logo-section">
                    <h2>QuizWiz</h2>
                </div>

                <div>
                    <p>Home</p>
                    <div className="settings-section">
                        <p>Settings</p>
                        <AiOutlineDown className='settings-icon'></AiOutlineDown>
                    </div>
                </div>

            </div>

            <div className="nav-right">
                <div className="plus-section">
                    <VscAdd className='plus icon'></VscAdd>
                </div>

                <div className="notifications-section">
                    <IoNotificationsOutline className='notification icon'/>
                </div>

                <div className="profile-section">

                </div>
            </div>
        </div>
    )
}