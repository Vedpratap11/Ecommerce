import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Blog from './Blogg/Blog.jsx'
import Cart from './Cart.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Singleblog from './Blogg/Singleblog.jsx'
import Singleproduct from './Singleproduct.jsx'


export const ecomcontext = createContext({})

function Main() {
  const [cart, setCart] = useState([])
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  function handleAddToCart(obj){
    
    if( cart.find(item => obj.id===item.id)) {setIsButtonVisible(!isButtonVisible)

      return (cart)
    }
    else{return setCart([...cart, obj])
      
    }
    
  }

  function handleRemoveFromCart(product){
    setCart(cart.filter((obj)=>{return(obj.id ===! product.id)}))
    setIsButtonVisible(!isButtonVisible)
  }
  return (
    <>

    {/*---------- prop drilling---------- */}
      {/* <BrowserRouter>
         <Header cartBhejo={cart}/>
         <Routes>
             <Route path='/' element={<Home handleFuncBhejo={handleAddToCart}/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/blog' element={<Blog/>}></Route>
             <Route path='/cart' element={<Cart cartBhejo={cart} />}></Route>
             <Route path='/blog/:id' element={<Singleblog/>}></Route>
             <Route path='/product/:id' element={<Singleproduct cartBhejo={cart} handleFuncBhejo={handleAddToCart}/>}></Route>

         </Routes>
         <Footer />
      </BrowserRouter> */}





      {/* ------------Contex-------------- */}
      <BrowserRouter>
       <ecomcontext.Provider value={{cart, setCart, handleRemoveFromCart, handleAddToCart, isButtonVisible}}>
         <Header/>
         <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/blog' element={<Blog/>}></Route>
             <Route path='/cart' element={<Cart/>}></Route>
             <Route path='/blog/:id' element={<Singleblog/>}></Route>
             <Route path='/product/:id' element={<Singleproduct/>}></Route>
            

         </Routes>
         <Footer />
         </ecomcontext.Provider>
      </BrowserRouter>
    </>
  )
}

export default Main
