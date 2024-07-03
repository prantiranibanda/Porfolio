"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [active, setActive] = useState('l1');
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = ()=>{
        setIsExpanded(!isExpanded);
    }
  return (
    <div className="sticky h-20 bg-black top-0">
            {/* Navbar */}
            <div className={`flex px-5 py-5 sm:px-10 lg:px-20 items-center`}>
                <div className='font-bold text-[#ff014f] text-2xl sm:text-3xl'><Link href="/">PRB</Link></div>
                <div className="menu" onClick={toggleExpand}><span className="material-symbols-outlined">{(isExpanded)?"expand_more":"menu"}</span></div>
                <div className='hidden font-thin text-white md:flex ml-auto space-x-1 md:space-x-2 mx-auto'>
                    <div className={(active === 'l1') ? "nav-btn-active" : "nav-btn"} onClick={()=>{setActive('l1')}}><Link href="/">Home</Link></div>
                    <div className={(active === 'l2') ? "nav-btn-active" : "nav-btn"} onClick={()=>{setActive('l2')}}><Link href="/about">About</Link></div>
                    <div className={(active === 'l3') ? "nav-btn-active" : "nav-btn"} onClick={()=>{setActive('l3')}}><Link href="/skills">Skills</Link></div>
                    <div className={(active === 'l4') ? "nav-btn-active" : "nav-btn"} onClick={()=>{setActive('l4')}}><Link href="/contact">Projects</Link></div>
                    <div className={(active === 'l5') ? "nav-btn-active" : "nav-btn"} onClick={()=>{setActive('l5')}}><Link href="/contact">Contact</Link></div>
                </div>
                <div className="resume"><Link href="/resume">Resume</Link></div>
            </div>
            {/* Menu */}
            <div className={`bg-slate-300 fixed w-full ${(isExpanded)?"block":"hidden"} opacity-95 md:hidden`}>
                <Link href="/"><div className="dropdown">Home</div></Link>
                <Link href="/about"><div className="dropdown">About</div></Link>
                <Link href="/skills"><div className="dropdown">Skills</div></Link>
                <Link href="/contact"><div className="dropdown">Contact</div></Link>
            </div>
        </div>
  )
}

export default Navbar
