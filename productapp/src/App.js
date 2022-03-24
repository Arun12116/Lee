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
  const onAdd = (product) => {
    // console.log(product);
    console.log(cartItems);
    const exist = cartItems.find(item => item.id === product.id);  // bag :2 , shirt :3 , pant: 1 // product: pant 
    console.log(exist);  // pant
    if (exist) {
      setCartItems(cartItems.map(item => item.id === product.id ? {
        ...exist, qty: exist.qty + 1
      } : item));


    }
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty == 1) {
      setCartItems(cartItems.filter((x) =>
        x.id !== product.id))
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ? {
        ...exist, qty: exist.qty - 1
      } : item));

    }
  }

  // const [state, setstate] = useState(0);
  // function updatestate() {

  //   setstate(state + 1)
  // }
  //product items
  const [products, setProduct] = useState([]);
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
      <Nav countCartitems={cartItems.length}/>
      <div className='Map'>

        {
          products.map((items) => {

            return (
              <div>


                <Card category={items.category} decri={items.description} id={items.id} img={items.image} price={items.price} rating={items.rating} title={items.title} onAdd={onAdd} product={items} />

              </div>


            )
          })
        }

      </div>


      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />







    </>
  );

}

export default App;
