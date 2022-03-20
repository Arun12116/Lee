import { FaUser,FaCartPlus} from "react-icons/fa";
// import {Link} from "react-router-dom"
import "./Nav.css";
const Nav = (props) => {
// console.log(props.state);

    return (
        
        <>

            <div className="main">
                <div className='nav'>
                    <h3 className="logo">Lee</h3>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <form className="srch">
                        <input placeholder="Search">
                            {/* <FaSearch/> */}
                        </input>
                    </form>
                    <FaUser className='usericon' />
                   <FaCartPlus className="CartIcons" onClick={props.click}/>
                   <h2 className="number-of-cart">{props.st}</h2>
                </div>
                
            </div>
            



        </>
    )
}

export default Nav
