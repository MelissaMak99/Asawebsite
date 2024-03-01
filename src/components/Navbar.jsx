import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../images/Asali-1 (2).jpg';
import { Button, Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-router-dom';


const scrollTo = (targetSection) => {
    window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
};
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='bg-white flex text-black justify-between items-center h-24  max-w-[1240px] mx-auto px-4'>
        <Button><Link to={"/"} spy={true} smooth={true} offset={50} duration={500}><img className='w-[100px] md:w-[150px]' src={Logo} alt='Not found'/></Link></Button>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#fcb900]'><Button><Link to={"/"} spy={true} smooth={true} offset={50} duration={500}>Home</Link></Button></li>
            <li className='p-4 hover:text-[#fcb900]'><Button><ScrollLink to={"discover"} spy={true} smooth={true} offset={50} duration={500}>Discover</ScrollLink></Button></li>
            <li className='p-4 hover:text-[#fcb900]'><Button><Link to={"/Donate"} spy={true} smooth={true} offset={50} duration={500}>Donate</Link></Button></li>
            <li className='p-4 hover:text-[#fcb900]'><Button><ScrollLink to={"mission"} spy={true} smooth={true} offset={-20} duration={500}>About</ScrollLink></Button></li>
            <li className='p-4 hover:text-[#fcb900]'><Button><ScrollLink to={"getinvolved"} spy={true} smooth={true} offset={50} duration={500}>Get Involved</ScrollLink></Button></li>
        </ul>
        {/* <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#fcb900]'>Home</li>
            <li className='p-4 hover:text-[#fcb900]'>Discover</li>
            <li className='p-4 hover:text-[#fcb900]'>Donate</li>
            <li className='p-4 hover:text-[#fcb900]'>About</li>
            <li className='p-4 hover:text-[#fcb900]'>Contact</li>
        </ul> */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500" : "fixed left-[-100%]"}>
            <img className='w-[100px] md:w-[200px]' src={Logo} alt='Not found' />
            <ul className=''>
                <li className='p-4 border-b border-gray-600 hover:text-[#fcb900]'><Button><Link to={"/"} spy={true} smooth={true} offset={50} duration={500}>Home</Link></Button></li>
                <li className='p-4 border-b border-gray-600 hover:text-[#fcb900]'><Button><ScrollLink to={"mission"} spy={true} smooth={true} offset={-20} duration={500} onClick={() => setNav(false)}>About</ScrollLink></Button></li>
                <li className='p-4 border-b border-gray-600 hover:text-[#fcb900]'><Button><Link to={"/Donate"} spy={true} smooth={true} offset={50} duration={500}>Donate</Link></Button></li>
                <li className='p-4 border-b border-gray-600 hover:text-[#fcb900]'><Button><ScrollLink to={"discover"} spy={true} smooth={true} offset={50} duration={500} onClick={() => setNav(false)}>Discover</ScrollLink></Button></li>
                <li className='p-4'><Button><ScrollLink to={"getinvolved"} spy={true} smooth={true} offset={50} duration={500}>Get Involved</ScrollLink></Button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar