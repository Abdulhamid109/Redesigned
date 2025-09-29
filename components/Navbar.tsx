import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);





export default function Navbar() {
    const NavbarRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        console.log('ScrollTrigger setup running');
        
        const handleScroll = () => {
            const scrollY = window.scrollY;
            console.log('Scroll position:', scrollY); // Debug log
            
            if (NavbarRef.current) {
                if (scrollY > 50) {
                    gsap.to(NavbarRef.current, {
                        color: "white",
                        duration: 0.3,
                        
                    });
                } else {
                    gsap.to(NavbarRef.current, {
                        color: "black",
                        duration: 0.3,
                        
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
   
    return (
        <div ref={NavbarRef} className='top-0 bottom-0 left-0 right-0 fixed z-51 pointer-events-none'>
            <div className='pointer-events-auto flex relative top-3 max-w-[70vw] justify-evenly items-center m-auto p-5 rounded-4xl bg-blue-500/20 backdrop-blur-md border border-white/30 shadow-lg '>
                <div className='font-semibold text-2xl'>
                    <a href={"/"}>Redesigned</a>
                </div>
                <div className='flex gap-5 font-thin '>
                    <ul className='flex justify-center items-center hover:transition-all relative underline-animate'>About us</ul>
                    <ul className='flex justify-center items-center hover:transition-all relative underline-animate'>Contact</ul>
                    <ul className='flex justify-center items-center hover:transition-all relative underline-animate'>Pricing</ul>
                    <button className='bg-pink-400 p-2 rounded-md flex justify-center items-center'>Get Started</button>
                </div>
            </div>
        </div>


    )
}
