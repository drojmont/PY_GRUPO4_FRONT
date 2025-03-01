import { useEffect, useState } from 'react';
import { getCategories } from '../../../../../services/categoryService';

export const SelectCategory = ({ onGetCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log('Ha ocurrido un error al obtener las categorias', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const category = categories.find((category) => category.name === value);
    const categoryId = category.id_category;
    console.log("select category comp.",categoryId);
    setSelectedCategory(value);
    onGetCategory(categoryId);
  };

  return (
    <div className="flex w-72 flex-col gap-6">
      <select
        value={selectedCategory}
        color="black"
        onChange={handleSelectChange}
        className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-300"
      >
        <option value="" disabled hidden>
          Categoría
        </option>
        {categories.map((category) => (
          <option
            key={`item-category-${category.id_category}`}
            value={category.name}
            className="rounded-lg"
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
