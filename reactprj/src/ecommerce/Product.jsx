import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ecomcontext } from "./Main"
import { useContext} from "react"
function Product({product}) {
    const {handleAddToCart, handleRemoveFromCart, isProductInCart} = useContext(ecomcontext)
    const [count, setCount] = useState(1)
    function icre(){
        setCount(count + 1)
    }
    function dcre(){
        if(count>1) setCount(count-1)
    }
  return (
    <div className="Box">
    <Link to={`/product/${product.id}`}> 
        <img src={product.image} alt="" />
    </Link>
    <h3>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
    </h3>
    <p>${product.price}</p>
    {/* <Link className="btn" to={``} onClick={() => props.handleFuncBhejo(obj1)}>Add To Cart</Link>      prop drrilling */}
    {/* { isButtonVisible ? (<Link className="btn" to={``} onClick={() => handleAddToCart(obj1)}>Add To Cart</Link>) : } */}
    {isProductInCart(product.id)?
           (<div className='counter'>
            <button onClick={icre}>+</button>
            <p>{count}</p>
            <button onClick={dcre}>-</button>
            <button onClick={()=>handleRemoveFromCart(product)}>remv</button>
        </div>) 
    :
       (<Link className="btn" to={``} onClick={() => handleAddToCart(product)}>Add To Cart</Link>)}
     
</div>
  )
}

export default Product
