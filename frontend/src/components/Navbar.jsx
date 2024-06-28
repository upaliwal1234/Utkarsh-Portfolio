// import AnchorLink from "react-anchor-link-smooth-scroll"
import { useState } from "react"
import { Link } from "react-scroll"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    console.log(isMenuOpen);
    return (
        <div>
            <nav className='bg-black p-4 fixed w-full top-0 z-[1000] transition-["background-color 0.3s ease-in-out"] bg-opacity-50'>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-white text-3xl font-bold">Utkarsh Paliwal</div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            <svg className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                    </div>

                    <ul className='hidden md:flex text-2xl space-x-10'>
                        <li><Link to="intro" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>About</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>Contact</Link></li>
                    </ul>
                </div>

                {isMenuOpen ? (
                    <ul className='flex-col md:hidden my-2 text-3xl gap-1'>
                        <li><Link to="intro" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>About</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className='text-white hover:cursor-pointer hover:text-gray-700'>Contact</Link></li>
                    </ul>
                ) : null}
            </nav>
        </div>
    )
}

export default Navbar