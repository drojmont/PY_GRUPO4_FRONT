const validationCreateProduct = ({ name, description }) => {
  const errors = {};

  // Valida minimo 2 caracteres, contener al menos una letra
  const regexName = /^(?=.*[a-zA-ZñÑ])[\s\S]{2,}$/;

  // Valida minimo 10 caracteres, contener al menos una letra
  const regexDescription = /^(?=.*[a-zA-ZñÑ])[\s\S]{10,}$/;

  if (!name.length) {
    errors.name = "Debes ingresar un nombre de evento";
  } else if (name.trim().length < 2) {
    errors.name = "Debes ingresar un nombre válido con mínimo 2 caracteres";
  } else if (!regexName.test(name)) {
    errors.name = "El nombre debe contener al menos una letra";
  } else if (name.trim().length > 30) {
    errors.name = "El nombre debe contener menos de 30 caracteres";
  }

  if (!description.length) {
    errors.description = "Debes ingresar una descripción para el evento";
  } else if (description.trim().length < 10) {
    errors.description = "La descripción debe contener mínimo 10 caracteres";
  } else if (description.trim().length > 500) {
    errors.description = "La descripción debe contener menos de 500 caracteres";
  } else if (!regexDescription.test(description)) {
    errors.description = "La descripción debe contener al menos una letra";
  }

  return errors;
};

export default validationCreateProduct;
