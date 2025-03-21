import React from 'react'
import apple from '/public/assets/images/apple.svg'
import search from '/public/assets/images/search.svg'
import bag from '/public/assets/images/bag.svg'
import {navLists} from '../constants'
function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex items-center justify-between">
        <nav className="flex w-full screen-max-width">
           <img src={apple} alt="apple" width={14} height={14}/>

           <div className="flex flex-1 justify-center max-sm:hidden">
               {navLists.map((nav,i) => (
                <div key={i}>
                    {nav}
                </div>
               ))}
           </div>
           <div>
            <img src = {search} alt="search" width={14} height={14}/>
            <img src = {bag} alt="bag" width={14} height={14}/>
           </div>
        </nav>
    </header>
  )
}

export default Navbar