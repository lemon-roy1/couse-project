/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import'./Card.css'


const Card = ({seleactCouse,remaing,totalCost,Couses}) => {
    console.log(Couses);
    console.log(seleactCouse);
    

    return (
        <div>
            <h3>Credit Hour Remaining : {Couses.credit}</h3>
            <hr />
            <h3 className='font-tital'>couse name</h3>
            {
                seleactCouse.map((couse)=>(
                    <li key={couse.id}>{couse.name} </li>
                    
                ))
            }
            <hr />
            <h5 className='font-tital'>Total Price :{totalCost} USD</h5>
            <hr />
            <h5 className='font-tital'>Total Credit Hour :{remaing}</h5>
            <hr />
        </div>
    );
};

export default Card;