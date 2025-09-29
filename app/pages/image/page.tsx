"use client"

import Navbar from '@/components/Navbar';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ImageSegmentationPage = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const ImageData = async () => {
      try {
        const imgDatares = await axios.get("/api/getImageData");
        if (imgDatares.status === 200) {
          setImage(imgDatares.data.data);
        }
      } catch (error) {
        console.log("Something went wrong " + error);
        toast.error("Failed to get the image data");
      }
    }

    ImageData();
  }, [])
  return (
    <>
      <Navbar />
      <div className='pt-28'>
        <div className='flex justify-center items-center text-xl font-thin tracking-tight p-1'>
          Turning Pixels Into Possibilities with <span className="font-semibold bg-gradient-to-b from-yellow-50 to-red-200 p-2 rounded-md backdrop-blur-md border border-white/30 shadow-lg hover:text-white tracking-tight transition-all">Redesigned</span>
        </div>
        <div className='flex justify-between items-center p-20'>
          <div className='border max-w-1/2'>
            Extracted image
          </div>
          <div className="backdrop-blur-lg shadow-lg shadow-black max-w-1/2 rounded-2xl">
            {image ? (
              <img className='rounded-2xl' src={`data:image/png;base64,${image}`} alt="Uploaded" />
            ) : (
              <p>Session timeOut.. Kindly re-upload the Image File</p>
            )}
          </div>
        </div>

        <div className='flex justify-center items-center gap-10'>
          <button className="p-2 cursor-pointer hover:bg-zinc-950 rounded-md bg-zinc-800 text-white backdrop-blur-md shadow-xs shadow-black">
            <a href={"/"}>Abort</a>
          </button>
          <button className="p-2 cursor-pointer hover:bg-zinc-950 rounded-md bg-zinc-800 text-white backdrop-blur-md shadow-xs shadow-black">Go to The Console</button>
          <button className="p-2 cursor-pointer hover:bg-zinc-950 rounded-md bg-zinc-800 text-white backdrop-blur-md shadow-xs shadow-black">Perform OCR (Image-Text Extraction)</button>

        </div>
      </div>
    </>
  )
}

export default ImageSegmentationPage