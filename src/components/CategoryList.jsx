import { useEffect, useState } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/categorias")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error al obtener categorías:", error));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id_category} className="p-3 border rounded flex items-center">
            <img src={category.imageUrl} alt={category.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold">{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;