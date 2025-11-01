# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# 📋 Task Management Board

A modern, feature-rich task management application built with React, TypeScript, and Vite. This project provides a Jira-style Kanban board with drag-and-drop functionality, infinite scrolling, and real-time search capabilities.

![Tech Stack](https://img.shields.io/badge/React-19.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Vite](https://img.shields.io/badge/Vite-7.1-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-cyan)

## ✨ Features

- 🎯 **Kanban Board** - Visual task management with 4 columns (Backlog, In Progress, Review, Done)
- 🖱️ **Drag & Drop** - Seamlessly move tasks between columns and reorder within columns
- 📜 **Infinite Scroll** - Initially loads 8 tasks per column, dynamically loads 4 more on scroll
- 🔍 **Real-time Search** - Filter tasks across all columns by title or description
- ➕ **CRUD Operations** - Create, read, update, and delete tasks with ease
- 🎨 **Modern UI** - Beautiful, responsive design with TailwindCSS
- 🚀 **Performance Optimized** - Efficient state management and rendering

## 📦 Package Dependencies

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **react** | 19.1.1 | Core React library for building UI components |
| **react-dom** | 19.1.1 | React renderer for web applications |
| **typescript** | 5.9.3 | Type safety and enhanced developer experience |
| **vite** | 7.1.7 | Fast build tool and dev server with HMR |

### State Management

| Package | Version | Purpose |
|---------|---------|---------|
| **@reduxjs/toolkit** | 2.9.2 | Simplified Redux for global state management |
| **react-redux** | 9.2.0 | Official React bindings for Redux |

### Data Fetching

| Package | Version | Purpose |
|---------|---------|---------|
| **@tanstack/react-query** | 5.90.5 | Powerful data fetching and caching library |
| **axios** | 1.13.1 | HTTP client for API requests |
| **json-server** | 1.0.0-beta.3 | Mock REST API server for development |

### Drag & Drop

| Package | Version | Purpose |
|---------|---------|---------|
| **@dnd-kit/core** | 6.3.1 | Modern drag and drop toolkit for React |
| **@dnd-kit/sortable** | 10.0.0 | Sortable presets for dnd-kit (list reordering) |

### UI & Styling

| Package | Version | Purpose |
|---------|---------|---------|
| **tailwindcss** | 4.1.16 | Utility-first CSS framework |
| **@tailwindcss/vite** | 4.1.16 | TailwindCSS integration for Vite |
| **@mui/material** | 7.3.4 | Material-UI components (for dialogs) |
| **@emotion/react** | 11.14.0 | CSS-in-JS library (MUI peer dependency) |
| **@emotion/styled** | 11.14.1 | Styled API for Emotion (MUI peer dependency) |
| **lucide-react** | 0.525.0 | Beautiful, customizable icon library |
| **clsx** | 2.1.1 | Utility for constructing className strings |
| **tailwind-merge** | 3.3.1 | Merge Tailwind classes without conflicts |

### Form Management

| Package | Version | Purpose |
|---------|---------|---------|
| **formik** | 2.4.6 | Form state management and validation |
| **yup** | 1.7.1 | Schema validation for forms |

## 🏗️ Project Structure

```
mindluster-task/
├── src/
│   ├── components/          # React components
│   │   ├── Board.tsx                  # Main Kanban board container
│   │   ├── status-column.tsx          # Individual column with infinite scroll
│   │   ├── task-card.tsx              # Draggable task card
│   │   ├── task-management-dialog.tsx # Create/Edit task modal
│   │   ├── search-header.tsx          # Search bar component
│   │   └── loader-status-column.tsx   # Loading skeleton
│   │
│   ├── data/                # State management
│   │   ├── store.ts                   # Redux store configuration
│   │   ├── reducers/
│   │   │   └── tasks-reducer.ts       # Tasks state and actions
│   │   ├── selectors/
│   │   │   └── tasks-selector.ts      # Memoized selectors
│   │   ├── hooks/
│   │   │   └── index.ts               # Typed Redux hooks
│   │   └── types/
│   │       └── index.ts               # Redux types
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── use-tasks-management.ts    # React Query hook for tasks
│   │
│   ├── services/            # API layer
│   │   └── task-api.services.ts       # Task API calls
│   │
│   ├── utils/               # Helper functions
│   │   └── task.utils.ts              # Task utility functions
│   │
│   ├── lib/                 # Library configurations
│   │   ├── axios.config.ts            # Axios instance setup
│   │   ├── react-query-client.ts      # React Query config
│   │   └── utils.ts                   # General utilities
│   │
│   ├── types/               # TypeScript types
│   │   └── index.ts                   # Global type definitions
│   │
│   ├── styles/              # Global styles
│   │   └── index.css                  # TailwindCSS imports
│   │
│   ├── App.tsx              # Root component
│   └── main.tsx             # Application entry point
│
├── public/                  # Static assets
├── db.json                  # JSON Server database
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mindluster-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (in a separate terminal)
   ```bash
   npm run start-server
   ```
   This starts a mock API server on `http://localhost:4000`

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **dev** | `npm run dev` | Start development server with HMR |
| **build** | `npm run build` | Build for production |
| **preview** | `npm run preview` | Preview production build locally |
| **lint** | `npm run lint` | Run ESLint for code quality |
| **start-server** | `npm run start-server` | Start JSON Server on port 4000 |

## 🎮 How to Use

### Managing Tasks

1. **View Tasks**
   - Tasks are organized in 4 columns: Backlog, In Progress, Review, Done
   - Each column initially shows 8 tasks
   - Scroll down to automatically load 4 more tasks

2. **Create a Task**
   - Click the "+" button in the search header
   - Fill in the task title, description, and select a column
   - Click "Create" to add the task

3. **Edit a Task**
   - Click the pencil icon (✏️) on any task card
   - Modify the task details
   - Click "Update" to save changes

4. **Delete a Task**
   - Click the trash icon (🗑️) on any task card
   - The task will be removed immediately

5. **Move Tasks (Drag & Drop)**
   - Click and hold on a task card
   - Drag it to a different position in the same column OR to a different column
   - Release to drop the task in the new position

6. **Search Tasks**
   - Type in the search bar at the top
   - Tasks will be filtered in real-time across all columns
   - Search works on both title and description

### Infinite Scroll Behavior

- **Initial Load**: 8 tasks per column
- **Load More**: Scroll to the bottom of any column to load 4 more tasks
- **Loading Indicator**: A spinner appears while loading more tasks
- **End State**: When all tasks are loaded, no more loading happens

## 🧠 Key Technical Concepts

### State Management Architecture

The application uses a **dual-storage approach** for optimal performance:

```typescript
{
  allTasks: {          // Complete dataset from server
    backlog: [...],    // All backlog tasks
    "in-progress": [...],
    review: [...],
    done: [...]
  },
  visibleTasks: {      // Currently rendered tasks
    backlog: [...],    // Initially 8, grows by 4
    "in-progress": [...],
    review: [...],
    done: [...]
  },
  pagination: {        // Tracks loading state per column
    backlog: { hasMoreItems, isLoading, page, limit },
    ...
  }
}
```

### Drag & Drop Implementation

Uses `@dnd-kit` for a modern, accessible drag-and-drop experience:
- **DndContext**: Wraps the board and manages drag state
- **Droppable**: Each column is a drop zone
- **Sortable**: Tasks within columns are sortable
- **DragOverlay**: Shows a visual preview while dragging

### Infinite Scroll Implementation

Uses **Intersection Observer API** for efficient scroll detection:
- Observes a sentinel element at the bottom of each column
- Triggers `loadMoreTasksForColumn` action when visible
- Includes 500ms simulated delay for realistic loading experience

## 🎨 Customization

### Modify Initial Load Count

In `src/data/reducers/tasks-reducer.ts`:
```typescript
const INITIAL_TASKS_LIMIT = 8;  // Change this value
const LOAD_MORE_TASKS_LIMIT = 4; // Change this value
```

### Modify Column Colors

In `src/components/status-column.tsx`, update the `columnColor` function:
```typescript
const columnColor = (() => {
  switch (title) {
    case "backlog":
      return "bg-yellow-100";  // Change colors here
    // ...
  }
})();
```

### Add New Task Columns

1. Update the Task type in `src/types/index.ts`
2. Add the new column to the reducer's initial state
3. Update the `requiredColumns` array in `setTasks` action

## 🐛 Troubleshooting

### JSON Server not working?
```bash
# Make sure db.json exists and contains valid JSON
# Restart the server:
npm run start-server
```

### Port already in use?
- Vite will automatically use the next available port
- Or manually set port in `vite.config.ts`:
  ```typescript
  server: { port: 3000 }
  ```

### Drag & Drop not working?
- Ensure you're clicking and holding for a moment before dragging
- Check browser console for any errors

## 📄 License

This project is private and not licensed for public use.

## 👥 Contributing

This is a private project. For any questions or suggestions, please contact the project maintainer.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
