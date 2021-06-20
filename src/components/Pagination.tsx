import React, { ComponentType, EventHandler, useState } from "react"
import { Todo } from "../types/types";


export const Pagination: ComponentType<{tasks: Todo[], limit: number}> = ({ tasks, limit }) => {
  const [pages] = useState(Math.round(tasks.length / limit));
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  }
  const prevPage = () => {
    setCurrentPage((page) => page - 1);
  }
  const changePage = (event: React.MouseEvent) => {
    const pageNumber = Number(event.currentTarget.textContent) ;
    setCurrentPage(pageNumber);
  }

  const getData = () => {
    const startIndex = currentPage * limit - limit;
    const endIndex = startIndex + limit;
    return tasks.slice(startIndex, endIndex);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / limit) * limit;
    return new Array(limit).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {getData().map(c => console.log(c))}
      <div className="pagination">
        <button
          onClick={prevPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={nextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </>
  )
}