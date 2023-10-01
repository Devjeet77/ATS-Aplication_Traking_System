import React from 'react'
import HomeIcon from "../../assets/sideNav/home.svg"
import Calender from "../../assets/sideNav/calender.svg"
import Wishlist from "../../assets/sideNav/wishList.svg"
import People from "../../assets/sideNav/people.svg"
import Share from "../../assets/sideNav/share.svg"
import File from "../../assets/sideNav/file.svg"
import OpenBook from "../../assets/sideNav/openBook.svg"
import Settings from "../../assets/sideNav/settings.svg"
import User from "../../assets/sideNav/userIcon.svg"

const SideNav: React.FC = () => {
  return (
    <>
    <div className="p-1 w-[70px] flex flex-col h-screen justify-evenly bg-white">
          <div className=" rounded-full bg-blue"></div>
          <img src={HomeIcon} alt="" className="color-black rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={People} alt="" className="rounded-lg p-3 hover:bg-blueNeutral color-blue" />
          <img src={Calender} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={Share} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={File} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={OpenBook} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={Wishlist} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={Settings} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
          <img src={User} alt="" className="rounded-lg p-3 hover:bg-blueNeutral" />
        </div>
      
    </>
  )
}

export default SideNav
