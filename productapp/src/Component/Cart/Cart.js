import React from 'react';
import "./Cart.css"
// import App from '../../App'
const Cart = (props) => {
    console.log(props.cartItems);
    return (
        <div>

            <div> {props.cartItems.length === 0 && <div>cart is empty</div>}</div>

            {
                props.cartItems.map((curitems) => {
                    // console.log(curitems);
                    return (

                        <>

                            <h1>category:{curitems.category}</h1>
                            <h1> Price:{curitems.price}</h1>

                            <div>
                                <button onClick={() => props.onAdd(curitems)}>+</button>
                            </div>
                        </>
                    )


                })
            }
            {/* <div className="contanier">
                <div className="items">
                {
                   props.store.map((items)=>{
                       return(

                        <>
                        
                        <h1>id:{items.id}</h1>
                        <h1> Price:{items.price}</h1>
                        <h1> Category:{items.category}</h1>
                        <img className='imagee'src={ items.img} alt="" />
                        <div className="counter">
                            <button className='dec'>-</button>
                            <h1 className='zero'>0</h1>
                            <button className='inc'>+</button>

                            </div>
                        </>
                       )
                   }) 
                }
                </div>
                </div> */}

        </div>
    )
}

export default Cart
