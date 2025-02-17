import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DefaultImage from "@assets/image-default.svg"
import { AiFillCloseCircle } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";

const MAX_IMAGES = 5;

export default function ImageUploader({ images, setImages, error }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      let updatedImages = [...images];

      // Encuentra slots disponibles (donde isDefault es true)
      const emptySlots = updatedImages
        .map((img, i) => (img.isDefault ? i : null))
        .filter((i) => i !== null);

      acceptedFiles.forEach((file, i) => {
        if (i < emptySlots.length) {
          // Reemplaza slots default con nuevas imágenes
          const reader = new FileReader();
          reader.onload = () => {
            updatedImages[emptySlots[i]] = {
              preview: reader.result,
              isDefault: false,
            };
            setImages(updatedImages);
          };
          reader.readAsDataURL(file)
        }
      });
    },
    [images, setImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    disabled: images?.filter((img) => !img.isDefault).length >= MAX_IMAGES,
  });

  const removeImage = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = { preview: DefaultImage, isDefault: true };
      return newImages;
    });
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = { preview: reader.result, isDefault: false };
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const remainingSlots =
    MAX_IMAGES - images.filter((img) => !img.isDefault).length;
  const message =
    remainingSlots === 1 ? "imagen restante" : "imágenes restantes";
  
  return (
    <div className="w-full max-w-[600px] p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg mb-2">Agregar Imagen</h2>
        <p className="text-sm text-gray-500 mb-2">
          Tienes {remainingSlots} {message} para agregar
        </p>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-400 p-6 text-center cursor-pointer mb-4 ${
          remainingSlots === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Suelta las imágenes aquí...</p>
        ) : (
          <p>Arrastra y suelta imágenes aquí, o haz clic para seleccionar</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 place-items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`border rounded-lg relative group w-[120px] lg:w-[135px] h-[110px] overflow-hidden hover:border-gray-400 hover:border-dashed hover:border-2 hover:scale-105 ${
              index === 0 ? "row-span-2 h-[224px] w-[160px] lg:w-[180px]" : ""
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
                src={image.preview}
                alt={`imagen producto ${index}`}
                className="w-full h-full object-contain cursor-pointer bg-white rounded-xl shadow-lg"
              />
            </label>
            {!image.isDefault && (
              <AiFillCloseCircle
                className="absolute top-1 right-1 text-red-500 bg-white rounded-full h-6 w-6 cursor-pointer group-hover:opacity-100"
                onClick={() => removeImage(index)}
              />
            )}
          </div>
        ))}
      </div>
      {error.images && (
        <p className="text-red-400 text-sm pt-1 flex items-center gap-2">
          <TbAlertCircle color="red" />
          {error.images}
        </p>
      )}
    </div>
  );
}
