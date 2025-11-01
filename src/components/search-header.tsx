import { type FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/data/hooks";
import { setSearchTerm } from "@/data/reducers/tasks-reducer";
import { searchTermSelector } from "@/data/selectors/tasks-selector";
import TaskDialog from "./task-management-dialog";

const SearchHeader: FC = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(searchTermSelector);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearch = (value: string) => {
    setLocalSearchTerm(value);
    dispatch(setSearchTerm(value));
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white ">
        <div className="flex items-center gap-2 flex-1 max-w-md border border-gray-300 p-2 rounded-lg">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by task title or description"
            value={localSearchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
        <button 
          onClick={() => setIsDialogOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Add Task
        </button>
      </div>
      
      <TaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        mode="create"
      />
    </>
  );
};

export default SearchHeader;
