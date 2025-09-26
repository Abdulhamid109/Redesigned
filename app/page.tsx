"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import gsap from 'gsap';

export default function GetStarted() {
  const [moduleStatus, setModuleStatus] = useState<boolean>(false);
  const mainContainerRef = useRef(null);

  const updateModuleStatus = () => {
    setModuleStatus(true);
  };

  const closeModal = () => {
    setModuleStatus(false);
  };

  useEffect(()=>{
    gsap.from(mainContainerRef.current,{
      opacity: 0,
      duration: 2,
      y:-20,
      ease: "power2.out",
    })
  },[])

  return (
    <div className="w-screen h-screen relative" ref={mainContainerRef}>
      <div className={`p-5 transition-all duration-300 ${moduleStatus ? "opacity-25 pointer-events-none" : ""}`}>
        <Navbar />
        <section className="text-4xl p-3 flex flex-col justify-center items-center max-w-full relative top-10">
          <div>
            Bring your creativity to Life using <span className="font-semibold bg-gradient-to-b from-yellow-50 to-red-200 p-2 rounded-md backdrop-blur-md border border-white/30 shadow-lg hover:text-white tracking-tight transition-all">Redesigned</span>
          </div>
          <div className="font-thin text-xl p-10 flex flex-col justify-center items-center">
            <div className="p-1">
              Redesigned is an AI based designing tool used for restyling your Data.
            </div>
            <div className="p-1">
              Just Upload the image and let our AI-Model cook for You..
            </div>
            <div className="p-1">
              Let Redesigned design your life.....
            </div>
            <div className="flex justify-center items-center gap-5 p-10">
              <button className="p-2 cursor-pointer hover:bg-zinc-950 rounded-md bg-zinc-800 text-white backdrop-blur-md shadow-xs shadow-black">
                <Link href={"/pages/aboutus"}>About Us</Link>
              </button>
              <button onClick={updateModuleStatus} className="p-2 cursor-pointer hover:bg-zinc-950 rounded-md bg-zinc-800 text-white backdrop-blur-md shadow-xs shadow-black">Try Now!!</button>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="max-w-[80vw] max-h-[80vh]">
            <img src="Screenshot 2025-09-26 151844.png" alt="no image found" />
          </div>
        </section>
      </div>

      {moduleStatus && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="w-[30vw] h-[20vh] bg-zinc-800 text-white flex flex-col justify-center items-center rounded-md p-10 relative">
            <div onClick={closeModal} className="w-full text-end opacity-70 cursor-pointer">close</div>
            <label className="font-thin text-start w-full">Upload the image</label>
            <div className="w-full max-h-full flex justify-center items-center p-1">
              <input type="file" accept=".png" onChange={closeModal} className="border p-2 rounded-md" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
