interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 3;
  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      {[...Array(Math.min(visiblePages, totalPages))].map((_, pageIndex) => (
        <button
          key={pageIndex + 1}
          onClick={() => onPageChange(pageIndex + 1)}
          className={`px-4 py-2 border ${
            currentPage === pageIndex + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } rounded`}
        >
          {pageIndex + 1}
        </button>
      ))}
      <button
        onClick={() =>
          onPageChange(currentPage < totalPages ? currentPage + 1 : 1)
        }
        className="px-4 py-2 border bg-white text-black rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
