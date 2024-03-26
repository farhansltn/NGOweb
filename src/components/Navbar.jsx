import { useState } from 'react';
import { navLists } from '../constants'
import { academicImg,bookImg,searchImg } from '../utils'
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <header className='w-full py-0 sm:px-10 px-5 
    flex justify-between items-center'> 
      
      <nav className='flex w-full screen-max-width'>
        <a id='imgnav' href="./Hero.jsx" className='mt-2'>
          <img src={academicImg}
          alt='apple' 
          width={80} height={20}/>
        </a>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav.id} className={`${
              active === nav.title 
              ? "text-[#ffffff] bg-[#627254]"
              : "text-[#627254] bg-[#ffffff]"
            }
            px-5 py-5 text-sm 
            cursor-pointer text-[#627254] hover:text-white hover:bg-[#627254]`}
            onClick={() => setActive(nav.title)}>
              <a href={nav.id}>{nav.title}</a>
            </div>
          ))}
        </div>
        <div className='flex items-baseline gap-7 py-5
        max-sm:justify-end max-sm:flex-1'>
           <a id='imgnav' href="">
              <img src={searchImg} alt="link"
              width={25} height={20} />
            </a>
            <a id='imgnav' href="">
              <img src={bookImg} alt="link"
              width={20} height={20} />
            </a>
          </div>
      </nav>
    </header>
  )
}

export default Navbar