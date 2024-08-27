import axios from "axios"
import Product from "./Product.jsx"
import { useContext, useEffect, useState } from "react"



function FecthProductAPIs() {
    
    const [obj, setObj] = useState([])
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get("https://fakestoreapi.com/products")
            console.log(result.data);

            setObj(result.data)

        }
        fetchData()
    }, [])

    return (
        <section id="wrapp">
            {
                obj.map((obj1) => {
                    return <Product key={obj1.id} product={obj1}/>
                })
            }
        </section>
    )
}
export default FecthProductAPIs