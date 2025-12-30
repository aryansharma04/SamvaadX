import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa6"
import { IoNotificationsSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { FiUser } from "react-icons/fi"; 
import FeedCard from "@/components/FeedCard";
import { Inter, Geist, Geist_Mono,Quicksand} from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({subsets:["latin"]});
const quicksand = Quicksand({subsets:["latin"]});

interface TwitterSidebarButton{
  title:string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <AiFillHome />
  },
  {
    title:'Explore',
    icon: <FaHashtag />

  },
  {
    title:"Notification",
    icon: <IoNotificationsSharp />
  },
  {
    title:"Messages",
    icon: <FaEnvelope />
  },
  {
    title:"Bookmarks",
    icon: <FaRegBookmark />
  },
  {
    title:"Profile",
    icon: <FiUser />
  }
  
]
 


export default function Home() {
  return (
    <div className={inter.className}> 
      <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 ml-10 pt-1">
        <div className="text-2xl h-fit w-fit hover:bg-gray-300 rounded-full p-4 cursor-pointer transition-all" >
        <FaTwitter  />
        </div>
        <div className="mt-1 text-xl font-semibold pr-4">
          <ul>
          {sidebarMenuItems.map((item)=>
            (
            <li className= "flex justify-start items-center gap-4  hover:bg-gray-300 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"  key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>

            ))}

          </ul>
          <div className="mt-5 px-10">
          <button className="bg-[#1d9bf0] font-semibold text-lg  py-2 px-4 rounded-full w-full mt-4">Tweet</button>

          </div>
        </div>
      </div>
      <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-auto no-scrollbar border-gray-400">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        
      </div>
      <div className="col-span-3"></div>
    </div>
    </div>
  );
}
