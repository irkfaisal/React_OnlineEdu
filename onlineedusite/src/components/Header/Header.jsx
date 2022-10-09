import React, { useRef } from 'react';
import "./Header.css";

import { Container } from 'reactstrap';


const navLinks = [
    {
        display: "Home",
        url: "#",
    },
    {
        display: "About",
        url: "#",
    },

    {
        display: "Courses",
        url: "#",
    },
    {
        display: "Pages",
        url: "#",
    },
    {
        display: "Blog",
        url: "#",
    },
];

const Header = () => {
    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");
    return (
        <header className='header'>
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="log">
                        <h2 className=" d-flex align-items-center gap-1">
                            <i class="ri-pantone-line"></i> Learners.
                        </h2>
                    </div>
                    <div className="nav  d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {
                                    navLinks.map((item, index) => (
                                        <li key={index} className="nav__item">
                                            <a href={item.url}>{item.display}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="nav__right">
                            <p className="mb-0 d-flex align-items-center gap-2">
                                <i class="ri-phone-line"></i> 0341-123456
                            </p>
                        </div>
                    </div>
                    <div className="mobile__menu" onClick={menuToggle}>
                        <span>
                            <i class="ri-menu-line" ></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}
export default Header;