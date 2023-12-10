import React from 'react'
import Clients from './Clients'

const MainSection = ({Data}) => {
  // console.log(Data);
  return (
    <div className="p-10 h-[100vh] w-[55%] overflow-y-scroll shadow-2xl">
        <Clients Data={Data}/>
    </div>
  )
}

export default MainSection