import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@material-tailwind/react';

const PaginationTable = ({
  currentPage,
  totalPages,
  onPageChange,
  setCurrentPage,
}) => {

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

 
  const renderPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    return pages.map((page, index) => (
      <Button
        key={index}
        onClick={() => typeof page === 'number' && goToPage(page)}
        className={`px-3 py-1 rounded-md transition ${
          currentPage === page
            ? 'bg-gray-800 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        disabled={page === '...'}
      >
        {page}
      </Button>
    ));
  };

  return (
    <>
      <Button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md flex items-center gap-1 bg-white text-gray-800 hover:bg-gray-300 disabled:opacity-50 capitalize"
      >
        <IoIosArrowBack size={16} /> Previo
      </Button>

      <div className="flex gap-2">{renderPagination()}</div>

      <Button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md flex items-center gap-1 bg-white text-gray-800 hover:bg-gray-100 disabled:opacity-50 capitalize"
      >
        Siguiente <IoIosArrowForward size={16} />
      </Button>
    </>
  );
};

export default PaginationTable;
