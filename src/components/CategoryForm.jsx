import { useState } from "react";
import axios from "axios";

const CategoryForm = () => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/categorias/registrar", category);
      setMessage("Categoría agregada con éxito.");
      setCategory({ name: "", description: "", imageUrl: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error al agregar la categoría", error);
      setMessage("Error al agregar la categoría.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Agregar Categoría</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={category.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={category.description}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL de la Imagen"
          value={category.imageUrl}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Agregar Categoría
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;