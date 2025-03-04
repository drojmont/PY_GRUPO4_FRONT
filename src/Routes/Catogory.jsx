import { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Obtener las categorías al cargar el componente
  useEffect(() => {
    fetch("http://localhost:8080/categorias")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error obteniendo categorías:", error));
  }, []);

  // Obtener todos los productos (sin filtro) al cargar el componente
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error obteniendo productos:", error));
  }, []);

  // Función para manejar la selección de categorías
  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter((id) => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  // Función para aplicar el filtro de categorías automáticamente
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.categories.some((category) =>
          selectedCategories.includes(category.id)
        )
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, products]);

  // Función para limpiar los filtros
  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="w-full mt-10 p-4 text-center">
      <h1 className="text-2xl font-bold">Categorías</h1>
      <p className="text-gray-700 mt-2">
        Filtra los productos según las categorías que elijas.
      </p>

      {/* Filtros de categorías */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center border border-[#3C6E71] bg-white rounded-lg px-4 py-2 gap-2"
          >
            <label
              htmlFor={`category-${category.id}`}
              className="text-[#3C6E71] font-semibold cursor-pointer"
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </label>

            {selectedCategories.includes(category.id) && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategories((prevSelected) =>
                    prevSelected.filter((id) => id !== category.id)
                  );
                }}
                className="text-[#3C6E71] ml-2"
              >
                <img
                  src="/close.svg"
                  alt="Eliminar filtro"
                  className="w-4 h-4"
                />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Mensaje de resultados encontrados */}
      <div className="mt-6 text-[#3C6E71] text-lg font-semibold">
        <p>
          ¡Se encontraron {filteredProducts.length} resultados de su búsqueda!
        </p>
      </div>

      {/* Mostrar los productos filtrados */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h4 className="font-semibold text-lg">{product.name}</h4>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Botón de limpiar filtros */}
      <div className="mt-6">
        <button
          onClick={clearFilters}
          className="bg-[#3C6E71] text-white px-4 py-2 rounded"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};

export default Category;
