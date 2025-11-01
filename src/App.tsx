import React, { useEffect } from "react";
import Board from "./components/Board";
import { useAppDispatch } from "./data/hooks";
import { setLoading, setTasks } from "./data/reducers/tasks-reducer";
import { useTasksManagement } from "./hooks/use-tasks-management";

const App = () => {
  const dispatch = useAppDispatch();

  const { data: tasks, isLoading } = useTasksManagement();

  useEffect(() => {
    dispatch(setLoading(isLoading));
    dispatch(setTasks(tasks || []));
  }, [isLoading, tasks, dispatch]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-blue-50">
      <Board />
    </div>
  );
};

export default App;
