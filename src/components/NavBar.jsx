import {useState } from 'react';
import {close , logo, menu } from '../assets'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="logo" className="w-[168px] h-[32px]"></img>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li>

                    </li>
                    ))}

            </ul>
        </nav>
    );
};

export default NavBar;
