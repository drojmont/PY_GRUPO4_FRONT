import { Card } from "@material-tailwind/react";


const SelectImage = ({images, setImages}) => {
 

  /* Handle de las imagenes de archivo */
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

  return (
    <Card className="bg-anti-flash-white p-5">
      <h2 className="font-bold mb-5 text-jet text-lg">Agregar Imagen</h2>
      <section className="grid grid-cols-3 place-items-center gap-y-4 ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`border rounded-lg relative w-[135px] h-[110px] overflow-hidden hover:border-dashed hover:border-2 hover:scale-105 ${
              index === 0 ? 'row-span-2 h-[224px] w-[180px]' : ''
            }`}
          >
            <label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(index, e)}
              />
              <img
                src={image}
                alt={`imagen producto ${index}`}
                className="w-full h-full object-contain cursor-pointer bg-white rounded-xl shadow-lg"
              />
            </label>
          </div>
        ))}
      </section>
    
    </Card>
  );
};

export default SelectImage;
