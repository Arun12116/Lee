
import "./Card.css";

const Card = (props) => {

    return (
        <>

            <div className="Card">
                <img className="img" src={props.img} alt="" />
                <h1>Category:{props.category}</h1>
                {/* <h1>Decription:{props.decri}</h1> */}
                {/* <p>{props.rating}</p> */}
                <h1>{props.title}</h1>
                <h1>Price:{props.price}</h1>
                <h1>id:{props.id}</h1>
                <div className="btnn">
                    <button className='btn1'>Buynow</button>
                    <button className='btn' onClick={()=>props.onAdd}> Add to cart</button>
                </div>
            </div>














        </>






    )
}

export default Card
