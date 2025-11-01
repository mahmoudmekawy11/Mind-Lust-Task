import { type FC, useRef, useCallback, useEffect } from "react";
import type { Task } from "@/types";
import TaskCard from "./task-card";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useAppDispatch, useAppSelector } from "@/data/hooks";
import { loadMoreTasksForColumn, setColumnLoading } from "@/data/reducers/tasks-reducer";
import { paginationSelector } from "@/data/selectors/tasks-selector";

interface StatusColumnProps {
  title: Task["column"];
  tasks: Task[];
}

const StatusColumn: FC<StatusColumnProps> = ({ title, tasks }) => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector(paginationSelector);
  const columnPagination = pagination[title];
  
  const enhancedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  
  const observerTarget = useRef<HTMLDivElement>(null);

  const { setNodeRef, isOver } = useDroppable({
    id: title,
    data: {
      column: title,
      index: tasks.length,
    },
  });

  const handleLoadMore = useCallback(() => {
    if (!columnPagination.isLoading && columnPagination.hasMoreItems) {
      dispatch(setColumnLoading({ column: title, isLoading: true }));
      
      // Simulate loading delay
      setTimeout(() => {
        dispatch(loadMoreTasksForColumn(title));
      }, 500);
    }
  }, [columnPagination.isLoading, columnPagination.hasMoreItems, dispatch, title]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [handleLoadMore]);

  const columnColor = (() => {
    switch (title) {
      case "backlog":
        return "bg-yellow-100";
      case "in-progress":
        return "bg-blue-200";
      case "review":
        return "bg-green-200";
      case "done":
        return "bg-gray-200";
      default:
        return "bg-white";
    }
  })();

  const taskIds = tasks.map((task) => task.id.toString());

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-w-[260px] sm:min-w-[300px] ${columnColor} p-2 rounded-md h-full flex flex-col transition-all ${
        isOver ? "ring-2 ring-blue-500 ring-offset-2" : ""
      }`}
    >
      <h2 className="text-center font-bold mb-3 p-3 border-b border-gray-400">
        {enhancedTitle}
      </h2>
      <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
        <div className="space-y-3 px-2 flex flex-col overflow-y-auto h-full">
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          
          {/* Intersection Observer Target */}
          {columnPagination.hasMoreItems && (
            <div ref={observerTarget} className="py-2">
              {columnPagination.isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-700"></div>
                </div>
              ) : (
                <div className="text-center text-sm text-gray-500">
                  Scroll for more...
                </div>
              )}
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
};

export default StatusColumn;
