const uploadToCloudinary = async (image) => {
    
    const UPLOAD_PRESENT= import.meta.env.VITE_UPLOAD_PRESENT
    const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME

    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("upload_preset", upload_preset);
    // formData.append("folder", upload_preset); 
  
    const formData = new FormData();

    // Si es base64, lo convertimos a Blob
    if (image.startsWith('data:image')) {
      const blob = await fetch(image).then((res) => res.blob());
      formData.append('file', blob);
    } else {
      formData.append('file', image);
    }

    formData.append('upload_preset', UPLOAD_PRESENT);
    formData.append('folder', UPLOAD_PRESENT);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
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
    const uploadPromises = images.map((img) => {
      if (img.preview.startsWith('data:image')) {
        return uploadToCloudinary(img.preview);
      }
      return null;
    });
  
    const uploadedUrls = await Promise.all(uploadPromises);
    return uploadedUrls.filter((url) => url !== null);
  };
  
  

 
