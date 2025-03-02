import { useEffect, useState } from 'react';
import { getCategories } from '../../../../../services/categoryService';

export const SelectCategory = ({
  onGetCategory,
  initialData,
}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  console.log("selectedCategory", selectedCategory)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        // Si hay initialData, establece la categoría seleccionada
        if (initialData?.categoryOutputDTO?.name) {
          setSelectedCategory(initialData.categoryOutputDTO.name);
        }
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };
    fetchCategories();
  }, []);

  
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);

    const category = categories.find((category) => category.name === value);
    if (category) {
      onGetCategory(category.id_category);
    }
  };

  return (
    <div className="flex w-72 flex-col gap-6">
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
