import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai'
import {VscAdd} from 'react-icons/vsc'
import {IoNotificationsOutline} from 'react-icons/io5'
import {Dropdown, DropdownItem } from '../Dropdown/Dropdown';
import {BiSolidExit} from 'react-icons/bi'
import './navbar.css'
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export const Navbar = (props) => {
    const [showDropdown, setShowDropdown] = useState('temp');
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

    useEffect(() => {
        const dropdown = document.querySelector(".settings-dropdown-container");
        if (dropdown !== null)
        {
        }
    }, [showDropdown])
   

    return (
        <header>
            <div className='sidebar'>
                <BiSolidExit className='exit' onClick={handleSidebar}/>
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

                    <div className="profile-section">
                    </div>
                </div>

                </div>
        </header>
    )
}