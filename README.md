# User Management Application

This **User Management Application** is a full stack MERN (MongoDB, Express, React, Node.js) application for managing users. It includes functionality such as add, update, and delete users as well as deleting user information in a grid format.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [File Structure](#file-structure)
- [Code Snippets](#code-snippets)
- [License](#license)

## Project Overview

The **User Management Application** is a simple web application for managing users. It allows you to:

- **Add Users**: Create new user entries.
- **View Users**: Display a list of all users.
- **Update Users**: Edit user details

## Technologies Used
### Frontend
- **React.js** -A JavaScript library for building dynamic and interactive user interfaces.
- **React Router** - Handles navigation and routing between different pages in the application.
- **Evergreen UI** -  Provides pre-built, customizable components for a sleek and modern UI.
- **Bootstrap** - A responsive framework to ensure the application looks great on all devices.
- **CSS** - Custom styling to enhance the overall appearance and user experience.
- **JavaScript (ES6)** - he primary programming language used for the frontend logic.

### Backend
- **Node.js** - A JavaScript runtime for executing server-side code and building scalable applications.
- **Express.js** - A lightweight web framework for creating APIs and handling HTTP requests.
- **MongoDB** - A NoSQL database used for storing and managing user data efficiently.
- **Mongoose** - An ODM (Object Data Modeling) library for MongoDB that simplifies database interactions.

### Additional Tools
- **Axios for API requests** - Handles HTTP requests for data retrieval and submission.
- **ag-Grid for data display** -  Displays data in a dynamic, customizable, and responsive grid format.
- **dotenv for environment configuration** - Manages environment variables, such as database connection strings, securely.


## Prerequisites

Before running the application, ensure to have the following installed:

- **Node.js (v14+)**: Download and install [Node.js](https://nodejs.org/) (which includes npm).
- **MongoDB**:A NoSQL database used to store user data in the application. We can a cloud-hosted service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **npm**: Node Package Manager comes with Node.js.
- **Git**: For version control and cloning the repository. You can download [Git](https://git-scm.com/).

## Installation

### Steps to Set Up

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kshitijchaudhary/mern-user-management-app
    ```

2. **Navigate to the project folder**:

    ```bash
    cd mern-user-management-app
    ```

3. **Install project dependencies for both frontend and backend**:

    ```bash
    #Frontend
    cd client
    npm install

    #Backend
    cd ../server
    npm install
    ```

    This will install all required libraries and dependencies listed in the `package.json` file.
3. **Set up environment variables:**:
    ```bash
    1. Sign in to MongoDB Atlas (https://www.mongodb.com/cloud/atlas) and Create a cluster
    2. Create a new database called userManagement and add a users collection.
    3. Obtain the connection string (eg:mongodb+srv://<username>:<password>@cluster.mongodb.net/userManagement)
    ```

4. **Set up environment variables:**: Create a .env file in the server directory and add the following
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

## Usage

### Run the Application

1. **Start the development server**:

    ```bash
    #Backend
    cd server
    npm run dev

    #Frontend
    cd ../client
    npm start
    ```

2. **Accessing the Application**

- Open your browser and visit [http://localhost:3000](http://localhost:3000).
- The backend server will run on (http://localhost:5000)
- You will be redirected to the home page that displays the list of users. You can navigate to the **Add User** and **Update User** pages using the buttons and links available in the app.

 ### Navigate through the pages:

- **Home Page**: Displays a list of all users.
- **Add User Page**: A form to add a new user.
- **Update User Page**: Allows you to update existing user details.

## Features

- **Add User**: Provides a form to create new users, including fields like name and email.
- **View Users**: Displays a list of users, including options to edit or delete them.
- **Update User**: Allows you to update user details such as name and email.
- **Responsive Design**: The application is fully responsive, meaning it adapts to different screen sizes and devices.
- **Modern UI**: Built with Evergreen UI for a sleek and modern user interface.

## Screenshots

### 1. Home Page (User List)

![Home Page](./screenshots/home-page.png)

The Home Page displays the list of all users in a clean and organized grid. You can click on the "Edit" or "Delete" buttons to modify or remove a user.

### 2. Add User Page

![Add User Page](./screenshots/add-user-page.png)

This page allows you to add new users by filling out a simple form with fields for name and email.

### 3. Update User Page

![Update User Page](./screenshots/update-user-page.png)

The Update User page lets you edit the details of an existing user. You can update their name and email address and save the changes.

## File Structure

Here is the file structure of the project:
```
User-Management-App/
├── client/                # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── AddUser.js
│       │   ├── UserList.js
│       │   └── UpdateUser.js
│       ├── App.js
│       └── index.js
├── server/                # Node.js Backend
│   ├── controller/
│   │   └── usercontroller.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userroutes.js
│   ├── .env
│   └── index.js
├── README.md
├── package.json
└── node_modules/
```
## Code Snippets
### Backend Examples
1. User Controller (userController.js)
2. User Routes (userRoutes.js)
3. User Model (User.js)
4. Express Server (index.js)

### Frontend Examples
1. API (userApi.js)
2. Components (AddUser.js)
3. Components (DeleteUser.js)
4. Components (EditUser.js)
5. Components (UserList.js)
6. Components (Navbar.js)
7. Components (LoadingOverlay.js)
8. Components (NoRowsOverlay.js)
9. Static (styles.css)
10. Main App (App.js)

