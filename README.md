# 📝 Todo List App

A modern, responsive todo list application built with React, TypeScript, Redux Toolkit, and Material-UI. This application allows you to create, manage, and organize your tasks with a clean and intuitive interface.

## 🌐 Live Demo

**Try the application online**: [https://task-management-app-net.netlify.app/](https://task-management-app-net.netlify.app/)

## ✨ Features

- **Task Management**: Create, edit, and delete tasks
- **Status Tracking**: Organize tasks by status (Pending, In Progress, Completed)
- **Search Functionality**: Find tasks quickly with real-time search
- **Persistent Storage**: Tasks are automatically saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Material-UI components for a polished look
- **TypeScript**: Full type safety and better development experience

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/psp8/toDoList
   cd toDoList
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode with hot reloading
- `npm run build` - Creates a production build optimized for deployment

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   └── FloatingActionButton.tsx
├── features/            # Redux feature slices
│   └── tasks/
│       └── tasksSlice.ts
├── views/               # Page-level components
│   ├── AddTaskForm.tsx
│   ├── EditTaskForm.tsx
│   ├── TaskActionButtons.tsx
│   ├── TaskFormDialog.tsx
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   └── TaskStatus.tsx
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── store.ts             # Redux store configuration
├── theme.ts             # Material-UI theme configuration
└── types.ts             # TypeScript type definitions
```

## 🎯 How to Use

1. **Adding Tasks**: Click the floating action button (+) to add a new task
2. **Editing Tasks**: Click the edit icon on any task to modify it
3. **Changing Status**: Use the status dropdown in the edit form to change task status
4. **Searching**: Use the search bar to find specific tasks
5. **Deleting Tasks**: Click the delete icon to remove a task permanently

## 🏗️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Build Tool**: Webpack 5
- **Date Handling**: Moment.js
- **Styling**: Emotion (CSS-in-JS)

## 🔧 Configuration

### Webpack Configuration
The project uses Webpack 5 with the following features:
- TypeScript compilation with ts-loader
- CSS processing with style-loader and css-loader
- Hot module replacement for development
- Asset handling for images and static files

### Redux Store
The application uses Redux Toolkit for state management with:
- Automatic persistence to localStorage
- Immutable state updates
- Type-safe actions and reducers

## 📱 Browser Support

This application works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
- If port 3000 is already in use, Webpack will automatically use the next available port
- Check the terminal output for the actual port being used

**Build errors**
- Make sure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**TypeScript errors**
- Ensure you're using a compatible TypeScript version
- Check that all type definitions are properly installed


**Happy task managing! 🎉**
