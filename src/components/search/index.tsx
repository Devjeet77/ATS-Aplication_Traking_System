import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'
import React from 'react'
import Filter from '../filter'

const SearchComponent: React.FC = () => {
  return (
    <>
    <div className=" p-2 mx-4 w-[35%]">
          <p className="text-blue font-bold text-xl">
            London Internship Program
          </p>
          <p>London</p>
          <div>
            <Input
              placeholder="Search by name"
              prefix={<SearchOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                </Tooltip>
              }
            />
            <br />
            <br />
            <br />
            <Filter />
          </div>
        </div>
    </>
  )
}

export default SearchComponent
