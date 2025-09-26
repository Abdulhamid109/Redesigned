import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className='flex relative top-3 max-w-[70vw] justify-evenly items-center m-auto p-5 rounded-4xl bg-blue-500/20 backdrop-blur-md border border-white/30 shadow-lg '>
                <div className='font-semibold text-2xl'>
                    Redesigned
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
