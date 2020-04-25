import React from 'react'

const Data = ({data}) => {
    return (
        <div>
            <center><h1>Data List</h1></center>
            {data.map((item) => (
                <div>
                    <div>
                        <h4>{item.name}</h4>
                        <h6>{item.email}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Data