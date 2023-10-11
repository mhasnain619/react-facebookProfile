
import React, { useState } from 'react'
import hannu from '../hannu.jpg'
import data from '../api'
function Api() {
    const [pdata, setPdata] = useState([])
    const getProduct = () => {

    }

    return (
        <>
            <button onClick={getProduct}>get pro</button>
            <div className='main-containe' sx={{ display: "block" }}>
                {data?.map((e, i) => {
                    return (
                        <div key={i} className='information' style={{ margin: "10px 10px", padding: 10 }}>
                            <div >
                                <h6
                                    className='name'>
                                    {e.name}
                                </h6>
                                <p>{e.gender}</p>
                            </div>
                            <p>{e.description}</p>
                            <img src={e.image} width="300px" height="300px" alt='pic' />
                        </div>
                    )
                })}

            </div>
        </>
    )

}

export default Api;
