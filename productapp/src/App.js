import Nav from './Component/Navbar/Nav';
import Card from './Component/Card/Card';
import './App.css';
import Cart from './Component/Cart/Cart';

// import Data from './Component/Data/Data';
// import Cart from './Component/Cart/Cart';
import { useState, useEffect } from "react"




function App() {
const [show,setShow]=useState(false)
//Store the Data in the Array form
  const [store, setStore] = useState([]);
//counter add to cart
  const [state, setstate] = useState(0);
  function updatestate(items) {
    setStore(store.concat({ img: items.image, price: items.price , category:items.category}))
    setstate(state + 1)
  }
  const [product, setProduct] = useState([]);
  console.log(product)

  const userDetails = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    setProduct(await response.json());
    // console.log(setProduct);

  }

  useEffect(() => {
    userDetails();
  }, [])

const click=()=>{
  setShow(true)
}

  return (

    <>
      <Nav st={state}  click={click}/>
      <div className='Map'>

        {
          product.map((items) => {

            return (
              <div>


          <Card category={items.category} decri={items.description} id={items.id}img={items.image} price={items.price} rating={items.rating} title={items.title} upadate={() => updatestate(items)}/ >

              </div>


            )
          })
        }
      
      </div>
      
      {show ? (
        <Cart store={store}/>
        
      ) : (
      ""
      )};

     

     

    </>
  );

}

export default App;
