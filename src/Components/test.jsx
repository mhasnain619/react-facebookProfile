import { useState } from 'react';
import '../Components/test.css';

function Test() {
    const [productData, setProductData] = useState([])
    const Data = () => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProductData(json))
    }
    console.log(productData);
    return (
        <div className="mainDev">
            <div className='InfoDiv'>
                {productData?.map((e, i) => {
                    return (
                        <div key={i} className="profile">
                            <div className="proImg">
                                <img src={e.image} height={150} width={150} alt="" />
                                <p> {e.title} </p>
                            </div>
                            <div className="products">
                                <p>{e.description}</p>
                            </div>

                        </div>
                    )
                })}
                <button onClick={Data}>DetData</button>
            </div>




        </div>
    )



}
export default Test;