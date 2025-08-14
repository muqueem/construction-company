import React from 'react'

const Nav = ({ setIsMenuOpen = () => {} }) => {
    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Contact Us", href: "#contact" }
    ]

  return (
    <>
        {quickLinks.map((link, index) => (
            <li key={index} onClick={() => setIsMenuOpen(false)} className='nav-item md:text-lg text-[#fff] hover:text-[#0083cf] transition-all duration-300 text-xl'><a href={link.href}>{link.name}</a></li>
        ))}
    </>
  )
}

export default Nav;
