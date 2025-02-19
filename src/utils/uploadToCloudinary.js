const uploadToCloudinary = async (image) => {
    
    const upload_preset= "proyectoIntegrador"
    const cloud_name = "dekukjia0"

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", upload_preset);
    formData.append("folder", upload_preset); 
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      return data.secure_url; // Retorna la URL segura de la imagen subida
    } catch (error) {
      console.error("Error subiendo la imagen a Cloudinary:", error);
      return null;
    }
  };
  
  
  export const uploadImages = async (images) => {
    const uploadPromises = images.map((img) =>
      img.isDefault ? null : uploadToCloudinary(img.preview)
    );
  
    const uploadedUrls = await Promise.all(uploadPromises);
    return uploadedUrls.filter((url) => url !== null); // Filtra errores
  };
  

 
