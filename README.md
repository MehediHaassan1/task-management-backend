# Task Manager Application

<p>This is the backend of the Task Management Application, built using Node.js and Express. It provides a RESTful API for managing tasks, which can be created, updated, deleted, and retrieved by the frontend.</p>

## Table of Contents

-   [Features](#Features)
-   [Technologies](#Technologies)
-   [Setup and Installation](#Setup)
-   [API Endpoints](#Endpoints)
-   [Folder Structure](#Structure)
-   [Known Issues](#Issues)
-   [Future Improvements](#Improvements)

## Features
-   RESTful API for task creation, editing, deletion, and retrieval
-   MongoDB as the database for storing tasks
-   CORS enabled for cross-origin requests from the frontend
-   Task undo feature for deletion within 5 seconds

## Technologies
-   **[Node.js](https://nodejs.org/)** (JavaScript runtime environment)
-   **[Express.js](https://expressjs.com/)** (Web framework for Node.js)
-   **[MongoDB](https://www.mongodb.com/)** (NoSQL database for task storage)
-   **[Mongoose](https://mongoosejs.com/docs/)** (ODM (Object Data Modeling) library for MongoDB)

## Setup and Installation
Instructions on how to install the project.

```sh
# Clone the repository
git clone https://github.com/MehediHaassan1/task-management-backend

# Navigate to the project directory
cd project-name

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Update .env file with your configuration

# Start the project
npm run dev
```

## API Endpoints

-   **GET** `/api/tasks` - Retrieve all tasks
-   **POST** `/api/tasks` - Create a new task
-   **PUT** `/api/tasks/:id` - Update an existing task
-   **DELETE** `/api/tasks/:id` -  Delete a task

## Folder Structure
src/

├── app.ts              
├── server.ts            
├── app/                 
│   ├── config/          
│   │   └── index.ts     
│   ├── modules/         
│   │   └── task/        
│   │       ├── task.interface.ts  
│   │       ├── task.controller.ts 
│   │       ├── task.model.ts      
│   │       ├── task.routes.ts     
│   │       └── task.service.ts    
│   ├── routes/          
│   │   └── index.ts
│   └── utils/          
│         ├── catchAsync.ts  
│         └── sendResponse.ts 



## Known Issues
- The task deletion undo option is time-limited, and there may be latency issues if the network is slow.
- No authentication or user management is implemented, so all tasks are globally accessible.

## Future Improvements
- Implement user authentication and task ownership.
- Add task sorting and pagination for better performance with large datasets.
- Add more advanced validation for task fields.
- Improve error handling and add more descriptive responses for different scenarios.