
import { useEffect, useState } from "react";
export const useLocalPagination = (initialData) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(
    initialData.slice(currentPage, currentPage + 6)
  );

  useEffect(() => {
    setFilteredData(data.slice(currentPage, currentPage + 6));
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 6);
    }
  };
  const nextPage = () => {
    if (data.length > currentPage + 6) {
      setCurrentPage(currentPage + 6);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    filteredData,
    setFilteredData,
    prevPage,
    nextPage,
  };
};