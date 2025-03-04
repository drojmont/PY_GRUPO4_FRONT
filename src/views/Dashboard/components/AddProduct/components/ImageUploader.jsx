import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import DefaultImage from '@assets/image-default.svg';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbAlertCircle } from 'react-icons/tb';

const MIN_IMAGES = 5;
const MAX_IMAGES = 15;

export default function ImageUploader({ images, setImages, error }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      let updatedImages = [...images];
      const currentCount = updatedImages.filter((img) => !img.isDefault).length;
      const remainingSlots = MAX_IMAGES - currentCount;

      // Solo toma las primeras imágenes según los slots disponibles
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);

      filesToAdd.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const newImage = {
            preview: reader.result,
            isDefault: false,
          };

          const defaultIndex = updatedImages.findIndex((img) => img.isDefault);

          if (defaultIndex !== -1) {
            updatedImages[defaultIndex] = newImage;
          } else {
            updatedImages.push(newImage);
          }

          setImages(updatedImages);
        };
        reader.readAsDataURL(file);
      });
    },
    [images, setImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: "image/*",
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
      'image/png': [],
      'image/gif': [],
      'image/webp': [],
      'image/bmp': [],
      'image/svg+xml': [],
      'image/tiff': [],
    },
    disabled: images.filter((img) => !img.isDefault).length >= MAX_IMAGES,
  });

  const removeImage = (index) => {
    setImages((prevImages) => {
      let newImages = [...prevImages];
      newImages.splice(index, 1);

      if (newImages.length < MIN_IMAGES) {
        while (newImages.length < MIN_IMAGES) {
          newImages.push({ preview: DefaultImage, isDefault: true });
        }
      }

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

  const currentCount = images.filter((img) => !img.isDefault).length;
  const remainingSlots = MAX_IMAGES - currentCount;
  const message =
    remainingSlots === 1 ? 'imagen restante' : 'imágenes restantes';

  return (
    <div className="p-4 border rounded-lg shadow-md bg-anti-flash-white">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg mb-2">Agregar Imagen</h2>
        <p className="text-sm text-gray-500 mb-2">
          Tienes {remainingSlots} {message} para agregar
        </p>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 text-center bg-white shadow-lg cursor-pointer mb-4 ${
          remainingSlots === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Suelta las imágenes aquí...</p>
        ) : (
          <p>
            Para más imagenes, arrastra y suelta el archivo aquí o haz clic aquí
          </p>
        )}
      </div>

      <div
        className="grid gap-2 place-items-center"
        style={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`border rounded-lg relative group w-[135px] h-[110px] overflow-hidden hover:border-dashed hover:border-2 hover:scale-105 ${
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
