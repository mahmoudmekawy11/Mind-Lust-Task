import type { Task } from "@/types";
import React, { type FC } from "react";
import { Pencil, Trash } from "lucide-react";
import TaskDialog from "./task-management-dialog";
import { useAppDispatch } from "@/data/hooks";
import { deleteTask } from "@/data/reducers/tasks-reducer";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskCardProps {
  task: Task;
  index?: number;
  isDragging?: boolean;
}

const TaskCard: FC<TaskCardProps> = ({ task, index = 0, isDragging = false }) => {
  const dispatch = useAppDispatch();

  const { title, description } = task;
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: task.id.toString(),
    data: {
      task,
      column: task.column,
      index,
    },
    disabled: isDragging,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  // If this is being used in DragOverlay, don't attach drag handlers
  if (isDragging) {
    return (
      <div className="border cursor-grabbing border-gray-300 p-3 bg-white shadow-xl rounded-md space-y-3">
        <h3 className="font-semibold text-center border-b border-gray-200 pb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-end items-center gap-3 flex-wrap">
          <button className="text-sm text-blue-600 hover:underline">
            <Pencil size={18} />
          </button>
          <button className="text-sm text-red-600 hover:underline">
            <Trash size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="border cursor-grab active:cursor-grabbing border-gray-200 p-3 bg-white shadow-md rounded-md space-y-3 transition-all hover:bg-gray-50 hover:shadow-lg"
      >
        <h3 className="font-semibold text-center border-b border-gray-200 pb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
        {/* Actions */}
        <div className="flex justify-end items-center gap-3 flex-wrap">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={handleDialogOpen}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <Pencil size={18} />
          </button>
          <button
            className="text-sm text-red-600 hover:underline"
            onClick={handleDelete}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <Trash size={18} />
          </button>
        </div>
      </div>

      <TaskDialog
        task={task}
        open={isDialogOpen}
        onClose={handleDialogClose}
        mode="edit"
      />
    </>
  );
};

export default TaskCard;
