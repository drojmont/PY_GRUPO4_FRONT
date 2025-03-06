import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import RecomendadosCard from "../views/Home/components/RecomendadosCard";
import { EventContext } from "../context/ProductContext";

const Category = () => {
  const { events, fetchEvents, isLoading } = useContext(EventContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filterParam = queryParams.get("filter");

  useEffect(() => {
    fetch("http://localhost:8080/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error obteniendo categorías:", error));
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (filterParam) {
      setSelectedCategories([Number(filterParam)]);
    }
  }, [filterParam]);

  // Filtrar los eventos según la categoría  seleccionada
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(events);
    } else {
      const filtered = events.filter(
        (event) =>
          event.categoryOutputDTO &&
          selectedCategories.includes(event.categoryOutputDTO.id_category)
      );

      setFilteredProducts(filtered);
    }
  }, [selectedCategories, events]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="w-full mt-5 p-4 text-center">
      {/* Filtros de categorías */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <div
            key={category.id_category}
            className="flex items-center border border-[#3C6E71] bg-white rounded-lg px-4 py-2 gap-2"
          >
            <label
              htmlFor={`category-${category.id_category}`}
              className="text-[#3C6E71] font-semibold cursor-pointer"
              onClick={() => handleCategoryChange(category.id_category)}
            >
              {category.name}
            </label>

            {selectedCategories.includes(category.id_category) && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategories((prevSelected) =>
                    prevSelected.filter((id) => id !== category.id_category)
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

      {/* Botón de limpiar filtros */}
      <div className="mt-6">
        <button
          onClick={clearFilters}
          className="bg-[#3C6E71] text-white px-4 py-2 rounded"
        >
          Limpiar filtros
        </button>
      </div>

      {/* Mensaje de resultados encontrados */}
      <div className="mt-6 text-[#3C6E71] text-lg font-semibold">
        {isLoading ? (
          <p>Cargando eventos...</p>
        ) : (
          <p>
            ¡Se encontraron {filteredProducts.length} productos de un total de{" "}
            {events.length} disponibles!
          </p>
        )}
      </div>

      {/* Mostrar los productos filtrados */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((event) => (
          <RecomendadosCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Category;
