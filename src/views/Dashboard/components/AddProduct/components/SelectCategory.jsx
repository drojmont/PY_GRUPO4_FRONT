import { useEffect, useState } from 'react';
import { getCategories } from '../../../../../services/categoryService';

export const SelectCategory = ({
  onGetCategory,
  initialData,
  valueCategoryModal
}) => {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  console.log("valor del select cuando se muestra el modal", selectedCategory)

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const data = await getCategories();
  //       setCategories(data);
  //       // Si hay initialData, establece la categoría seleccionada
  //       if (initialData?.categoryOutputDTO?.name) {
  //         setSelectedCategory(initialData.categoryOutputDTO.name);
  //       }
  //       if(valueCategoryModal.length > 0){
  //         setSelectedCategory(valueCategoryModal)
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener las categorías:', error);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

    // Cargar categorías al montar el componente
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const data = await getCategories();
          setCategories(data);
        } catch (error) {
          console.error('Error al obtener las categorías:', error);
        }finally {
          setIsLoading(false);
        }
      };
      fetchCategories();
    }, []);
  
    
    useEffect(() => {
      if (valueCategoryModal) {
        setSelectedCategory(valueCategoryModal);
      } else if (initialData?.categoryOutputDTO?.name) {
        setSelectedCategory(initialData.categoryOutputDTO.name);
      }
    }, [valueCategoryModal, initialData]);

  
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);

    const category = categories.find((category) => category.name === value);
    if (category) {
      onGetCategory(category.id_category);
    }
  };


   if (isLoading) {
    return <p>Cargando categorías...</p>;
  }
 
  return (
    <div className="flex  flex-col gap-6 w-full">
      <select
        value={selectedCategory || ''}
        onChange={handleSelectChange}
        className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-300 "
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
