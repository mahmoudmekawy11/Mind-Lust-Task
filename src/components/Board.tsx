import React, { useState } from "react";
import StatusColumn from "./status-column";
import SearchHeader from "./search-header";
import { useAppSelector, useAppDispatch } from "@/data/hooks";
import {
  isLoadingColumnsTasksSelector,
  filteredTasksSelector,
} from "@/data/selectors/tasks-selector";
import LoaderStatusColumn from "./loader-status-column";
import type { Task } from "@/types";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
  closestCorners,
} from "@dnd-kit/core";
import { moveTask, reorderTasksInColumn } from "@/data/reducers/tasks-reducer";
import TaskCard from "./task-card";

const Board = () => {
  const columnsTasks = useAppSelector(filteredTasksSelector);
  const isLoadingColumnsTasks = useAppSelector(isLoadingColumnsTasksSelector);
  const dispatch = useAppDispatch();

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const activeData = active.data.current;

    if (activeData?.task) {
      setActiveTask(activeData.task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    const activeData = active.data.current;
    const overData = over.data.current;

    if (!activeData || !overData) {
      setActiveTask(null);
      return;
    }

    const sourceColumn = activeData.column as Task["column"];
    const destinationColumn = overData.column as Task["column"];
    const taskId = activeData.task.id;

    // Moving between different columns
    if (sourceColumn !== destinationColumn) {
      dispatch(
        moveTask({
          taskId,
          sourceColumn,
          destinationColumn,
          destinationIndex: overData.index ?? 0,
        })
      );
    }
    // Reordering within the same column
    else if (activeData.index !== overData.index) {
      dispatch(
        reorderTasksInColumn({
          column: sourceColumn,
          sourceIndex: activeData.index,
          destinationIndex: overData.index,
        })
      );
    }

    setActiveTask(null);
  };

  const handleDragCancel = () => {
    setActiveTask(null);
  };

  return (
    <div className="w-full pt-3 pb-1 h-full flex flex-col 2xl:w-4/5 rounded-lg overflow-hidden bg-white shadow-lg">
      <SearchHeader />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="flex space-x-4 p-3 h-full overflow-x-auto">
          {isLoadingColumnsTasks
            ? Array.from({ length: 4 }, (_, index) => (
                <LoaderStatusColumn key={index} />
              ))
            : Object.entries(columnsTasks).map(([column, tasks]) => (
                <StatusColumn
                  key={column}
                  title={column as Task["column"]}
                  tasks={tasks}
                />
              ))}
        </div>
        <DragOverlay>
          {activeTask ? (
            <div className="">
              <TaskCard task={activeTask} isDragging />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Board;
