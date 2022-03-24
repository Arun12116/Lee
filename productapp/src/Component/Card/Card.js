
import "./Card.css";

const Card = (props) => {

    return (
        <>

            <div className="Card">
                <img className="img" src={props.img} alt="error" />
                <h1>Category:{props.category}</h1>
                {/* <h1>Decription:{props.decri}</h1> */}
                {/* <h1>{props.rating}</h1> */}
                <h1>{props.title}</h1>
                <h1>Price:{props.price}</h1>
                {/* <h1>id:{props.}</h1> */}
                <div className="btnn">
                    <button className='btn1'>Buynow</button>
                    <button className='btn' onClick={()=>props.onAdd(props.product)}> Add to cart</button>
                    
                </div>
            </div>














        </>






    )
}

export default Card
