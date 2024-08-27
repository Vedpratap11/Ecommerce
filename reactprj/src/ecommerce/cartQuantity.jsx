import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function CartQuantity() {
    const [count, setCount] = useState(1)

    function incre(){
        setCount(count + 1)
    }
    function decre(){
        if(count>1){
            setCount(count - 1)
        }
        
    }
  return (
    <div className='exright'>
    <IoIosArrowUp onClick={incre} />
    <div>{count}</div>
    <MdKeyboardArrowDown onClick={decre}/>
</div>
  )
}

export default CartQuantity
