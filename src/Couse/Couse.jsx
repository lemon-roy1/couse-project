/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Couse.css'
import Card from './Card/Card';



const Couse = () => {
    const [Couses, setCouses] = useState([])
    const [seleactCouse, setSeleactCouses] = useState([])
    const [remaing, setRemaing] = useState(0)
    const [totalCost, setTotalCost] = useState(0)


    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCouses(data))
    }, [])

    const heandelSelector = (couse) => {
        console.log(couse);

        const idExist = seleactCouse.find((item) => item.id == couse.id);
        let count = couse.price;
        if (idExist) {
            return alert('oll ready actor booking')
        } else {
            seleactCouse.forEach((item) => {
                count = count + item.price;
            })
            const totalRemaing = 20000 - count;
            if (count > 20000) {
                return alert(" tk sas ")
            }
            else {
                setRemaing(totalRemaing)
                setTotalCost(count)
                setSeleactCouses([...seleactCouse, couse])
            }
        }
    }



    return (
        <div className='container'>
            <div className="Home-container">
                <div className="card-containet">
                    {
                        Couses.map((couse) => (
                            <div key={couse.id} className="card">
                                <div className="card-img">
                                    <img className='photo' src={couse.img} alt="" />
                                </div>
                                <h2>{couse.name}</h2>
                                <p>{couse.detail}</p>
                                <div className="info">
                                    <p><img src="../../public/dollar-sign 1.svg" alt="img" /></p>
                                    <p>slary:{couse.price}</p>
                                    <img src='../../public/Frame.svg' alt="img" />
                                    <p>credit : {couse.credit}</p>
                                </div>
                                <button onClick={() => heandelSelector(couse)} className='card-btn'>seleact</button>
                            </div>
                        ))
                    }
                </div>
                <div className='cart'>
                    <Card seleactCouse={seleactCouse} remaing={remaing} totalCost={totalCost} Couses={Couses} />
                </div>

            </div>

        </div>
    );
};

export default Couse;