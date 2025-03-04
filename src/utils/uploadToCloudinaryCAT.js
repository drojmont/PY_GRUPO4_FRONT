export const uploadImage = async (image) => {
  const UPLOAD_PRESENT = import.meta.env.VITE_UPLOAD_PRESENT;
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

  const formData = new FormData();

  // Verificamos si image es un string (base64) o un objeto File
  if (typeof image === 'string' && image.startsWith('data:image')) {
    // Si es una cadena base64, la convertimos a un Blob
    const blob = await fetch(image).then((res) => res.blob());
    formData.append('file', blob);
  } else if (image instanceof File) {
    // Si es un objeto File (imagen seleccionada por el usuario), lo subimos tal cual
    formData.append('file', image);
  } else {
    console.error('El tipo de imagen no es válido.');
    return null;
  }

  formData.append('upload_preset', UPLOAD_PRESENT);
  formData.append('folder', UPLOAD_PRESENT);

  try {
    // Realiza la petición a Cloudinary para subir la imagen
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.secure_url; // Devuelve la URL segura de la imagen subida
  } catch (error) {
    console.error("Error subiendo la imagen a Cloudinary:", error);
    return null;
  }
};
