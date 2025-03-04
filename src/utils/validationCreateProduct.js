const validationCreateProduct = ({ name, description }, selectedCategory) => {
  const errors = {};

  // Valida minimo 2 caracteres, contener al menos una letra
  const regexName = /^(?=.*[a-zA-ZñÑ])[\s\S]{2,}$/;

  // Valida minimo 10 caracteres, contener al menos una letra
  const regexDescription = /^(?=.*[a-zA-ZñÑ])[\s\S]{10,}$/;

  //Expresión regular para precios en formato USD
  // const regexPrice = /^(?!0\d)(\d{1,3}(,\d{3})*(\.\d{2})?|\d+(\.\d{2})?)$/;

  // (?!0\d) → Evita ceros a la izquierda (no permite 0123).
  // \d{1,3}(,\d{3})* → Permite separar en miles con comas (ej: 1,500, 1,000,000).
  // (\.\d{2})? → Permite decimales con dos dígitos opcionales (ej: 1500.50).
  // |\d+(\.\d{2})? → También acepta números sin comas (ej: 1500, 1500.50).

  if (!name.length) {
    errors.name = 'Debes ingresar un nombre de evento';
  } else if (name.trim().length < 2) {
    errors.name = 'Debes ingresar un nombre válido con mínimo 2 caracteres';
  } else if (!regexName.test(name)) {
    errors.name = 'El nombre debe contener al menos una letra';
  } else if (name.trim().length > 50) {
    errors.name = 'El nombre debe contener menos de 50 caracteres';
  }

  // if (!price.length) {
  //   errors.price = 'Debes ingresar un precio para el evento';
  // } else if (!regexPrice.test(price)) {
  //   errors.price =
  //     'El precio debe tener un formato válido (Ej: 1500, 1,500, 1500.50, 1,500.99)';
  // }

  if (!description.length) {
    errors.description = 'Debes ingresar una descripción para el evento';
  } else if (description.trim().length < 10) {
    errors.description = 'La descripción debe contener mínimo 10 caracteres';
  } else if (description.trim().length > 500) {
    errors.description = 'La descripción debe contener menos de 500 caracteres';
  } else if (!regexDescription.test(description)) {
    errors.description = 'La descripción debe contener al menos una letra';
  }

  if (selectedCategory === 0) {
    errors.categoryId = "Debes elegir una categoría";
  }

  return errors;
};

export default validationCreateProduct;
