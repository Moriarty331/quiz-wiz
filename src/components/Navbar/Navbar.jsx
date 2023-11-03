import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {IoNotificationsOutline} from 'react-icons/io5'
import {Dropdown, DropdownItem } from '../Dropdown/Dropdown';
import {BiSolidExit} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'
import './navbar.css'
import profileImage from '../../assets/images/profile.jpg'
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import profile from

export const Navbar = (props) => {
    const [showDropdown, setShowDropdown] = useState('');

    const handleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show')
    }

    const handleDropdown = (name) => {
        if (showDropdown === name)
            setShowDropdown('');
        else
            setShowDropdown(name);
        
        //console.log(e.target.type)
        //dropdown.classList.toggle("animate-dropdown");
    }


    return (
        <header>
            <div className='sidebar'>
                <div className="exit-container">
                    <BiSolidExit className='exit' onClick={handleSidebar}/>
                </div>

                <div className="profile-img-container">
                    <img src={profileImage} alt="" />
                   
                </div>
                <div className="profile-options">
                    <h3 className='profile-name'>Milowithsugar</h3>
                    <p>About</p>
                    <p>Profile Settings</p>
                    <p>Back to home</p>
                </div>
            </div>

            <div className="navbar-container">
                <div className="nav-left">
                    <AiOutlineMenu className='menu-button' onClick={handleSidebar}></AiOutlineMenu>
                    <div className="logo-section">
                        <h2>QuizWiz</h2>
                    </div>
                    
                    <div>
                        <p>{props.name}</p>
                        <div className="settings-section" onClick={()  => handleDropdown('settings')}>
                            <p>Settings</p>
                            <AiOutlineDown className='settings-icon'></AiOutlineDown>
                            {showDropdown === 'settings' && 
                                <Dropdown>
                                    <DropdownItem name="test"></DropdownItem>
                                    <DropdownItem name="test"></DropdownItem>
                                    <DropdownItem name="test"></DropdownItem>
                                </Dropdown>
                            }
                        </div>
                    </div>

                </div>

                <div className="nav-right">
                    <Link to="/create-task">
                        <div className="plus-section">
                            <VscAdd className='plus icon'></VscAdd>
                        </div>
                    </Link>

                    <div className="notifications-section" onClick={() => handleDropdown('categories')}>
                        <IoNotificationsOutline className='notification icon'/>
                        {showDropdown === 'categories' &&
                            <Dropdown id="notifications-dropdown">
                                <DropdownItem name="Notification 1"></DropdownItem>
                                <DropdownItem name="Notification 2"></DropdownItem>
                                <DropdownItem name="Notification 3"></DropdownItem>
                            </Dropdown>
                        }
                    </div>
                    <Link to="/">
                    <div className="home-section">
                        <AiOutlineHome className='home-icon icon'></AiOutlineHome>
                    </div>
                    </Link>
                </div>

                </div>
        </header>
    )
}