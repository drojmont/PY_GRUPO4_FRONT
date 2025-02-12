import { Button, Card, CardBody, Input, Textarea, Typography } from "@material-tailwind/react"
import DefaultImage from '../../../../../assets/imagen-default.jpg'
import { useState } from "react";



const CreateProduct = () => {

  const [images, setImages] = useState(Array(5).fill(DefaultImage));
  const [inputs, setInputs]=useState({
  name:'',
  description:''
  });
  // const [errors, setErrors]=useState({})


 
  const handleImageChange = (index, event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputsChange=(e)=>{
  const name = e.target.name;
  const value = e.target.value;

  setInputs({
    ...inputs,
    [name]:value
  })
  
  }

  const handleSubmitNewProduct=(e)=>{
     e.preventDefault();
     const newProduct ={
      name:inputs.name,
      description:inputs.description,
      images:images
     }

     console.log(newProduct)
  }



  return (
    <Card className=" w-max mx-auto flex flex-col items-center shadow-lg pt-3">
        <CardBody>
       <h2>Agregar Imagen</h2>
       <section className="grid grid-cols-3 place-items-center gap-2">
       {images.map((image, index) => (
        <div key={index} className={`border rounded-lg relative cursor-pointer w-20 ${index === 0 ? 'row-span-2' : ''}`}>
          <label>
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={(e) => handleImageChange(index, e)} 
            />
            <img src={image} alt={`imagen producto ${index}`} className="w-full" />
          </label>
        </div>
      ))}
       </section>

       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmitNewProduct}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nombre del Evento
          </Typography>
          
          <Input size="lg" label="Nombre" name="name" onChange={handleInputsChange} value={inputs.name} />
           <Typography variant="h6" color="blue-gray" className="-mb-3">
            Descripción
          </Typography>
          <Textarea size="lg" label="Descripción" name="description" onChange={handleInputsChange} value={inputs.description}/>
    
        </div>
      
        <Button className="mt-6" fullWidth type="submit">
          Crear Producto
        </Button>
      </form>
        </CardBody>

    </Card>
  )
}

export default CreateProduct