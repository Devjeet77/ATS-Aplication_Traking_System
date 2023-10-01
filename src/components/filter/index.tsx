import React from 'react';
import { DownOutlined, FileTextOutlined } from '@ant-design/icons'

const Filter : React.FC = () => {
  return (
    <>
     <div className="flex justify-between bg-white p-5 rounded-t-lg">
              <p>Filters</p>
              <p>0 selected</p>
            </div>
            <div className="flex justify-between p-5 bg-white mt-1 hover:bg-blueNeutral">
              <div className="flex gap-3 font-semibold ">
                <FileTextOutlined />
                Personal Information
              </div>
              <DownOutlined style={{ color: "blue" }} />
            </div>
            <div className="flex justify-between p-5 bg-white mt-1 hover:bg-blueNeutral">
              <div className="flex gap-3 font-semibold">
                <FileTextOutlined />
                Education
              </div>
              <DownOutlined style={{ color: "blue" }} />
            </div>
            <div className="flex justify-between p-5 bg-white mt-1 hover:bg-blueNeutral">
              <div className="flex gap-3 font-semibold">
                <FileTextOutlined />
                Work Experience
              </div>
              <DownOutlined style={{ color: "blue" }} />
            </div>
            <div className="flex justify-between p-5 bg-white mt-1 hover:bg-blueNeutral">
              <div className="flex gap-3 font-semibold">
                <FileTextOutlined />
                Activity Filter
              </div>
              <DownOutlined style={{ color: "blue" }} />
            </div>
            <div className="flex justify-between p-5 bg-white mt-1 hover:bg-blueNeutral">
              <div className="flex gap-3 font-semibold">
                <FileTextOutlined />
                Advance Filter
              </div>
            </div>
      
    </>
  )
}

export default Filter
