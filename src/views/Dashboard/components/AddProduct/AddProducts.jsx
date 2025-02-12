import { Button } from "@material-tailwind/react"
import { Link } from "react-router"


const AddProducts = () => {
  return (
    <div >
     <Link to={'crear-producto'}><Button className="block ml-auto capitalize">Agregar Producto</Button></Link>
    </div>
  )
}

export default AddProducts