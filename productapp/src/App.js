import Nav from './Component/Navbar/Nav';
import Card from './Component/Card/Card';
import './App.css';
import Cart from './Component/Cart/Cart';

// import Data from './Component/Data/Data';
// import Cart from './Component/Cart/Cart';
import { useState, useEffect } from "react"




function App() {
// const [show,setShow]=useState(false)
//Store the Data in the Array form
  const [cartItems, setCartItems] = useState([]);
// console.log(cartItems);
const onAdd=(product)=>{
  
  const exist=cartItems.find(x => x.id === product.id);
  if(exist){
    setCartItems(cartItems.map(x => x.id === product.id ?{
      ...exist, qty: exist.qty+1}:x));
    

  }
  else{
    setCartItems([...cartItems,{...product, qty: 1}])
  }
};
  // const [state, setstate] = useState(0);
  // function updatestate() {
  
  //   setstate(state + 1)
  // }
  //product items
  const [product, setProduct] = useState([]);
  // console.log(product)

  const userDetails = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    setProduct(await response.json());
    // console.log(setProduct);

  }

  useEffect(() => {
    userDetails();
  }, [])

// const click=()=>{
//   setShow(true)
// }

  return (

    <>
      <Nav />
      <div className='Map'>

        {
          product.map((items) => {

            return (
              <div>


          <Card category={items.category} decri={items.description} id={items.id}img={items.image} price={items.price} rating={items.rating} title={items.title} onAdd={onAdd}/ >

              </div>


            )
          })
        }
      
      </div>
      
  
        <Cart cartItems={cartItems} onAdd={onAdd}/>
        
      

     

     

    </>
  );

}

export default App;
