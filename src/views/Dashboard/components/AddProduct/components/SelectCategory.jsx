import { useState } from 'react';

const categories = [
  'Conciertos',
  'Festivales',
  'Congresos',
  'Conferencias',
  'Eventos',
];

export const SelectCategory = ({ onGetCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
    onGetCategory(value);
  };

  return (
    <div className="flex w-72 flex-col gap-6">
      <select
        value={selectedCategory}
        color="black"
        onChange={handleSelectChange}
        className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4"
      >
        <option value="" disabled hidden>
          Categoría
        </option>
        {categories.map((category, index) => (
          <option
            key={`item-category-${index}`}
            value={category}
            className="rounded-lg"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
