

const validationCreateProduct = ({ name, description }) => {

  const errors = {};

  if (!name.length) {
    errors.name = 'Debes ingresar un nombre de evento';
  } else if (name.trim().length < 2) {
    errors.name = 'Debes ingresar un nombre válido con mínimo 2 caracteres';
  }

  if (!description.length) {
    errors.description = 'Debes ingresar una descripción para el evento';
  } else if (description.trim().length < 2) {
    errors.description = 'La descripción debe contener más de dos caracteres';
  }

 
  
  return errors;
};

export default validationCreateProduct;
