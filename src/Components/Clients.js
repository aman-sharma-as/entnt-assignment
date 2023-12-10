import React from 'react'
import Client from './Client'

const Clients = ({Data}) => {


    return (
    <div className="clientData flex flex-col gap-y-2 w-[100%]">
        {
            Data.map((client) => {
                    return <Client {...client} key={client.id}/>
                }
            )
        }
    </div>
    )
}

export default Clients