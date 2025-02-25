import { useState } from 'react';

const Gallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!images || images.length === 0) {
    return null;
  }

  const mainImage = images[0];
  const gridImages = images.slice(1, 5);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="relative h-[300px] md:h-[500px] overflow-hidden">
          <img
            src={mainImage}
            alt="Vista principal"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4">
          {gridImages.map((image, index) => (
            <div key={index} className="relative h-[240px] overflow-hidden">
              <img
                src={image}
                alt={`Vista ${index + 2}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {index === gridImages.length - 1 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white px-4 py-2 rounded-lg shadow-lg text-gray-800 font-medium transition-colors"
                >
                  Ver más
                </button>
              )}
            </div>
          ))}
        </div>

        
        <div className="md:hidden grid grid-cols-2 gap-2 mt-2">
          {gridImages.map((image, index) => (
            <div
              key={index}
              className="relative h-[150px] overflow-hidden"
            >
              <img
                src={image}
                alt={`Vista ${index + 2}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {index === gridImages.length - 1 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-2 right-2 bg-white/90 hover:bg-white px-2 py-1 text-sm rounded-lg shadow-lg text-gray-800 font-medium transition-colors"
                >
                  Ver más
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="w-full max-w-6xl p-4 flex flex-col h-screen">
            <div className="relative flex-1 min-h-0 flex flex-col">

              <div className="absolute top-0 right-0 p-4 z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white/90 hover:bg-white p-2 rounded-full"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              
              <div className="flex-1 flex items-center justify-center mb-4 relative">
                
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors"
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7" 
                    />
                  </svg>
                </button>
                
                
                <img
                  src={images[currentImageIndex]}
                  alt={`Vista ${currentImageIndex + 1}`}
                  className="max-h-[calc(100vh-160px)] w-auto object-contain rounded-lg"
                />
                
                
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors"
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>

              
              <div className="h-24 mt-auto">
                <div className="flex gap-2 overflow-x-auto snap-x py-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-none w-20 h-20 rounded-lg overflow-hidden ${
                        currentImageIndex === index
                          ? 'ring-2 ring-white'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;