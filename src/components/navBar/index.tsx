import { DownOutlined, } from '@ant-design/icons'
import React from 'react'
import Add from "../../assets/navBar/add.svg"
import UserVoice from "../../assets/navBar/userVoice.svg"
import UserClose from "../../assets/navBar/userClose.svg"
import Mail from "../../assets/navBar/mail.svg"
import UserCheck from "../../assets/navBar/userCheck.svg"

const Navbar : React.FC = () => {
  return (
    <>
      <div className="flex justify-between ">
            <div className="flex justify-between rounded-lg bg-white gap-7">
              <select className="text-blue font-bold p-3 rounded-b-lg">
                <option value="oppurtinuty">
                  <p className="text-black">Oppurtinuty browsing</p>
                </option>
                <option value="Applied" className="text-black p-7">
                  Applied
                </option>
                <option value="Shortlisted" className="text-black">
                  Shortlisted
                </option>
                <option value="Techenical" className="text-black">
                  Techenical Interview
                </option>
                <option value="Interview" className="text-black">
                  Video Interview
                </option>
                <option value="Other" className="text-black">
                  Other
                </option>
              </select>
            </div>
            <div className="flex gap-4">
              <img src={Add} alt='' className="bg-white px-2 rounded-lg border hover:bg-blueNeutral" />
              <img src={UserClose} alt='' className="bg-white px-2 rounded-lg border hover:bg-blueNeutral" />
              <img src={UserCheck} alt='' className="bg-white px-2 rounded-lg border hover:bg-blueNeutral" />
              <img src={UserVoice} alt='' className="bg-white px-2 rounded-lg border hover:bg-blueNeutral" />
              <img src={Mail} alt='' className="bg-white px-2 rounded-lg border hover:bg-blueNeutral" />
              <div className="bg-blue flex rounded-lg gap-2 w-full hover:bg-darkBlue">
                <div className="border-r">
                  <p className="text-white p-3 text-sm">Move to video Interview</p>
                </div>
                <div className="flex justify-center mr-2">
                  <DownOutlined style={{ color: "white" }} />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Navbar
