import React from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-wrap justify-center mt-4">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`mx-1 ${num === currentPage ? 'font-bold' : ''}`}
          >
            <button
              onClick={() => paginate(num)}
              className="px-4 py-2 border rounded hover:bg-gray-200"
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
