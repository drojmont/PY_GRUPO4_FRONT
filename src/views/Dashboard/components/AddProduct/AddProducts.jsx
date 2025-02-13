import { Button } from "@material-tailwind/react"
import { Link } from "react-router"
// import ProductsTable from "../ListProducts/components/ProductsTable"


const AddProducts = () => {
  return (
    <div >
     <Link to={'crear-producto'}><Button className="block ml-auto capitalize">Agregar Producto</Button></Link>
     {/* <ProductsTable/> */}
    </div>
  )
}

export default AddProducts