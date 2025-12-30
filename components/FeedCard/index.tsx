import React from 'react'
import Image from 'next/image'
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";

const FeedCard:React.FC = () =>{
    return (
    <div className='bg-gray-200 border border-r-0 border border-l-0 border-b-0 border border-gray-300 p-5 hover:bg-slate-200 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-1'>
                <Image src = "https://avatars.githubusercontent.com/u/146676396?v=4" alt ="user-image" height={50} width={50}  className="rounded-full"/>
            </div>
            <div className='col-span-11 gap-3'>
                <h5>Aryan Sharma</h5>
                <p className='text-sm text-gray-700,font-semibold'>I thoroughly enjoy being nice to people, but I am mindful to never forget how to savagely decimate them should the need arise.</p>
            </div>
            <div className='col-span-11 flex justify-between mt-4 max-w-md items-center text-gray-600 p-2 '>
                <div><FaRegComment /></div>
                <div><AiOutlineRetweet /></div>
                <div><BiLike /></div>
                <div><LuUpload /></div>
            </div>
        </div>
    </div>
    );
};

export default FeedCard;