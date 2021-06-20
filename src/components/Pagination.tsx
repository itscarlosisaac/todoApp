import { ComponentType, useContext } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { TodoContext } from "../context/TodoContext";
import { goToNextPage, goToPrevPage } from "../reducer/todoActions";

export const Pagination: ComponentType = () => {
  const [context, dispatch] = useContext(TodoContext)

  const current = context?.page
  const nextPage = () => {
    if (dispatch) {
      dispatch(goToNextPage(current! + 1))
    }
  }

  const prevPage = () => {
    if (dispatch) {
      dispatch(goToPrevPage(current! - 1))
    }
  }
  return (
    <>
      <div className="flex justify-between py-4 mt-4 border-t border-t-solid border-t-gray-500">
        <button disabled={current == 1} onClick={prevPage} className="text-blueish-500 hover:text-indigo-500 text-sm flex justify-center items-center">
          <ArrowLeftIcon className="h-5 mr-3" />Previous
        </button>
        <button  disabled={current == 20} onClick={nextPage } className="text-blueish-500 hover:text-indigo-500 text-sm flex justify-center items-center">
          Next <ArrowRightIcon  className="h-5 ml-3" />
        </button>
      </div>
    </>
  )
}