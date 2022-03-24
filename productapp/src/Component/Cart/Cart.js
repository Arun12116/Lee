import React from 'react';
import "./Cart.css"
// import App from '../../App'
const Cart = (props) => {
    // console.log(props.cartItems);

    const itemsprice = props.cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxprice = itemsprice * 0.14;
    const shippingcharge = itemsprice > 2000 ? 0 : 50;
    const totalprice = itemsprice + taxprice + shippingcharge;
    return (
        <div className="container">
            <div className="items">


                <div> {props.cartItems.length === 0 && <div>cart is empty</div>}</div>

                {
                    props.cartItems.map((curitems) => {
                        // console.log(curitems);
                        return (

                            <>
                <img className="imagee" src={curitems.img} alt="error" />

                                <h1>category:{curitems.category}</h1>
                                <h1> Price:{curitems.price}</h1>

                                <div>
                                    <button className='addbtn' onClick={() => props.onAdd(curitems)}>+</button>
                                    
                                    <button  className='subbtn'  onClick={() => props.onRemove(curitems)}>-</button>

                                </div>
                                
                                
                                
                                <div>
                                    {curitems.qty}x ${curitems.price.toFixed(2)}

                                </div>

                                <div>
                                    {props.cartItems.length!==0&&(
                                        <>
                                        <hr />
                                        <div>itemsprice:${itemsprice.toFixed(2)}</div>
                                        <br />
                                        <div>taxprice:${taxprice.toFixed(2)}</div>
                                        <br />
                                        <div>shippingcharge:${shippingcharge.toFixed(2)}</div>
                                        <br />
                                        <div>totalprice:${totalprice.toFixed(2)}</div>


                                        </>
                                    )}
                                </div>

                            </>
                        )


                    })
                }



            </div>
        </div>
    )
}

export default Cart
