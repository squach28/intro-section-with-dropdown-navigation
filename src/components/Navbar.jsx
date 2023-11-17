import { useState } from 'react'
import iconMenu from '../assets/images/icon-menu.svg'
import iconArrowDown from '../assets/images/icon-arrow-down.svg'
import iconArrowUp from '../assets/images/icon-arrow-up.svg'
import iconCloseMenu from '../assets/images/icon-close-menu.svg'
import iconTodo from '../assets/images/icon-todo.svg'
import iconCalendar from '../assets/images/icon-calendar.svg'
import iconReminders from '../assets/images/icon-reminders.svg'
import iconPlanning from '../assets/images/icon-planning.svg'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showFeaturesList, setShowFeaturesList] = useState(false)
    const [showCompanyList, setShowCompanyList] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

    const toggleFeaturesList = () => {
        setShowFeaturesList(prev => !prev)
    }

    const toggleCompanyList = () => {
        setShowCompanyList(prev => !prev)
    }

    return (
        <div className="flex items-center justify-between p-4 md:p-6">
            <div className="w-full flex justify-between md:justify-start items-center gap-5">
                <h1 className="lowercase font-bold text-3xl md:mr-4"><a href="/">Snap</a></h1>
                <img className="object-contain md:hidden" width={50} src={iconMenu} alt="hamburger menu icon" onClick={toggleMenu} />
                <ul className={`bg-[#ffffff] w-[60%] h-full flex flex-col gap-3 ${showMenu ? 'absolute' : 'hidden'} right-0 top-0 p-5 md:w-full md:flex md:items-center md:flex-row md:gap-7 text-medium-gray`}>
                    <li className="md:hidden">
                        <img className="ml-auto" src={iconCloseMenu} alt="close menu icon" onClick={toggleMenu} />
                    </li>
                    <li className="flex flex-col gap-3 relative">
                        <div className="flex gap-3 hover:cursor-pointer hover:text-almost-black" onClick={toggleFeaturesList} >
                            <p className="hover:text-almost-black">Features</p>
                            <img className="object-contain" src={showFeaturesList ? iconArrowUp : iconArrowDown} alt="down arrow icon" />
                        </div>
                        <ul className={`${showFeaturesList ? 'flex md:absolute md:top-[150%] md:right-0 md:rounded-md md:bg-[#ffffff] md:shadow-around md:px-7 md:py-3 md:text-start' : 'hidden'} flex-col gap-3 ml-6`}>
                            <li className="flex items-center gap-3 hover:cursor-pointer">
                                <img src={iconTodo} alt="icon of a notepad" />
                                <p>Todo List</p>
                            </li>
                            <li className="flex items-center gap-3 hover:cursor-pointer">
                                <img src={iconCalendar} alt="icon of a calendar" />
                                <p>Calendar</p>
                            </li>
                            <li className="flex items-center gap-3 hover:cursor-pointer">
                                <img src={iconReminders} alt="icon of a bell" />
                                <p>Reminders</p>
                            </li>       
                            <li className="flex items-center gap-3 hover:cursor-pointer">
                                <img src={iconPlanning} alt="icon of a clock" />
                                <p>Planning</p>
                            </li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-3 relative">
                        <div className="flex gap-3 hover:cursor-pointer" onClick={toggleCompanyList}>
                            <p className="hover:text-almost-black">Company</p>
                            <img className="object-contain" src={showCompanyList ? iconArrowUp : iconArrowDown} alt="down arrow icon" />
                        </div>
                            <ul className={`${showCompanyList ? 'flex md:absolute md:top-[150%] md:left-0 md:shadow-around md:py-3 md:px-6 md:rounded-md md:min-w-[140px] md:m-auto' : 'hidden'} flex-col gap-3 ml-6`}> 
                                <li className="hover:cursor-pointer">History</li>
                                <li className="hover:cursor-pointer">Our Team</li>
                                <li className="hover:cursor-pointer">Blog</li>
                            </ul>
                    </li>
                    <li className="hover:cursor-pointer hover:text-almost-black">Careers</li>
                    <li className="hover:cursor-pointer hover:text-almost-black">About</li>
                    <li className={`flex flex-col text-center gap-3 md:flex md:flex-row md:ml-auto md:gap-5 md:items-center text-medium-gray`}>
                        <a className="hover:text-almost-black" href="#">Login</a>
                        <a className="border-2 border-almost-black rounded-lg p-2 hover:text-almost-black" href="#">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar