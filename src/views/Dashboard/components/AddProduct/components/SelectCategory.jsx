import { useEffect, useState } from "react";
import { getCategories } from "../../../../../services/categoryService";

export const SelectCategory = ({
  onGetCategory,
  initialData,
  valueCategoryModal,
  setError,
  error,
}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorApi, setErrorApi] = useState("");

  // Cargar categorías al montar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
        setErrorApi(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Sincronizar el valor del select con valueCategoryModal
  useEffect(() => {
    if (valueCategoryModal) {
      setSelectedCategory(valueCategoryModal.name);
    } else if (initialData?.categoryOutputDTO?.name) {
      setSelectedCategory(initialData.categoryOutputDTO.name);
    }
  }, [valueCategoryModal, initialData]);

  // Manejar el cambio de categoría
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value); // Actualiza el select con el nuevo valor
    const category = categories.find((category) => category.name === value);

    if (category) {
      //onGetCategory(category.id_category);
      onGetCategory(category);
    }

    // Limpia el error de categoría si existe
    if (error?.categoryId) {
      const { categoryId, ...updatedErrors } = error;
      setError(updatedErrors);
    }
  };

  if (isLoading) {
    return <p className="py-2 pl-3">Cargando categorías...</p>;
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <select
        value={selectedCategory}
        onChange={handleSelectChange}
        className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-300"
      >
        <option value="" disabled hidden>
          Seleccione Categoría
        </option>
        {categories.length > 0 ? (
          categories.map((category) => (
            <option
              key={`item-category-${category.id_category}`}
              value={category.name}
              className="rounded-lg"
            >
              {category.name}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay categorías disponibles
          </option>
        )}
      </select>
    </div>
  );
};
