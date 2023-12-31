import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
    const {curruser} = useSelector(state => state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Spike</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
       
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600'></FaSearch>
        </form>
        <ul className='flex gap-4'>
            <Link to={'/'}>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li></Link>
            <Link to={'/about'}>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li></Link>
            <Link to={'/profile'}>
                {
                    curruser ?
                    (<img src={curruser.avatar} alt="Profile"></img>):
                    (<li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Sign up</li>)
                }
            
           </Link>
            
        </ul>
        </div>
        
    </header>
  )
}

export default Header