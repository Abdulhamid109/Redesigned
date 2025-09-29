"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

export default function GetStarted() {
  const [moduleStatus, setModuleStatus] = useState<boolean>(false);
  const mainContainerRef = useRef(null);
  const logoRef = useRef(null);
  const [ImageFile, setImageFile] = useState<File | null>(null);
  const Router = useRouter();


  const updateModuleStatus = () => {
    setModuleStatus(true);
  };

  const UploadFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);
    setImageFile(selectedFile!);

    
  };

  const addData =async(e:React.FormEvent)=>{
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("File", ImageFile!);

    const response = await axios.post("/api/imageuploadredis",formdata);
    if(response.status!==200){
      console.log("Failed to upload to the redis..");
      toast.error("Fatal:Data not uploaded into Redis");
    }else{
      toast.success("Successfully Data uploaded");
      closeModal();
      Router.push('/pages/image')
    }

  }


  const closeModal = () => {
    setModuleStatus(false);

  }

  useEffect(() => {
    gsap.from(mainContainerRef.current, {
      opacity: 0,
      duration: 2,
      y: -20,
      ease: "power2.out",
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      duration: 3,
      x: -20,
      ease: "power1.inOut"
    });




  }, [])
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen relative z-50" ref={mainContainerRef}>
        <div className={`p-5 transition-all duration-300 ${moduleStatus ? "opacity-25 pointer-events-none overflow-hidden" : ""}`}>

          <section className="pt-24 text-4xl p-3 flex flex-col justify-center items-center max-w-full relative top-10">
            <div>
              Bring your creativity to Life using <span ref={logoRef} className="font-semibold bg-gradient-to-b from-yellow-50 to-red-200 p-2 rounded-md backdrop-blur-md border border-white/30 shadow-lg hover:text-white tracking-tight transition-all">Redesigned</span>
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
              <div className="w-full max-h-full flex gap-4 justify-center items-center p-1">
                <input type="file" accept=".png" onChange={UploadFileChange} className="border p-2 rounded-md" />
                <button onClick={addData} className="p-2 cursor-pointer hover:bg-zinc-950 rounded-md bg-zinc-900 text-white backdrop-blur-md shadow-xs shadow-black">Submit</button>

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
