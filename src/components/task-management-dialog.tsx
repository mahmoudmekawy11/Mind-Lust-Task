import { type FC } from "react";
import Dialog from "@mui/material/Dialog";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { Task } from "@/types";
import { useAppDispatch } from "@/data/hooks";
import { updateTask, addTask } from "@/data/reducers/tasks-reducer";

interface TaskDialogProps {
  task?: Task | null;
  open: boolean;
  onClose: () => void;
  mode?: "create" | "edit";
}

const TaskDialog: FC<TaskDialogProps> = ({ task, open, onClose, mode = "edit" }) => {
  const dispatch = useAppDispatch();
  const isEditMode = mode === "edit" && task;

  const initialValues = {
    title: task?.title || "",
    description: task?.description || "",
    column: task?.column || "backlog",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters")
      .max(100, "Title must be less than 100 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters")
      .max(500, "Description must be less than 500 characters"),
    column: Yup.string().required("Column is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    if (isEditMode) {
      dispatch(updateTask({ ...values, id: task.id }));
    } else {
      dispatch(addTask(values));
    }
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <div className="p-8 bg-linear-to-br from-white to-gray-50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {isEditMode ? "Edit Task" : "Create New Task"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          enableReinitialize
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Task Title <span className="text-red-500">*</span>
                </label>
                <Field
                  name="title"
                  placeholder="Enter task title"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.title && touched.title
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                />
                <ErrorMessage name="title">
                  {(msg) => (
                    <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <Field
                  name="description"
                  as="textarea"
                  rows={4}
                  placeholder="Describe the task in detail..."
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                    errors.description && touched.description
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                />
                <ErrorMessage name="description">
                  {(msg) => (
                    <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status <span className="text-red-500">*</span>
                </label>
                <Field
                  name="column"
                  as="select"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer ${
                    errors.column && touched.column
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <option value="backlog">📋 Backlog</option>
                  <option value="in-progress">🚀 In Progress</option>
                  <option value="review">👀 Review</option>
                  <option value="done">✅ Done</option>
                </Field>
                <ErrorMessage name="column">
                  {(msg) => (
                    <div className="flex items-center gap-1 text-red-600 text-xs mt-1.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium transition-all transform hover:scale-105 active:scale-95"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : (
                    isEditMode ? "Save Changes" : "Create Task"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  );
};

export default TaskDialog;
