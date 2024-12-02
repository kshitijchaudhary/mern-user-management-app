# User Management Application

This **User Management Application** allows users to add, view, and update user details. Built with **React**, **Evergreen UI**, **Bootstrap**, and **React Router**, the application provides a modern and user-friendly interface for managing user data.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
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
- **Update Users**: Edit user details such as name and email.

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **React Router** - A library for handling routing in the application.
- **Evergreen UI** - A React UI framework for building modern and responsive UIs.
- **Bootstrap** - A front-end framework for building responsive and mobile-first websites.
- **CSS** - Custom styling for the application.
- **JavaScript (ES6)** - Programming language used for developing the app.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: Download and install [Node.js](https://nodejs.org/) (which includes npm).
- **npm**: Node Package Manager comes with Node.js, but you can verify it by running `npm -v` in your terminal.
- **Git**: For version control and cloning the repository. You can download [Git](https://git-scm.com/).

## Installation

### Steps to Set Up

1. **Clone the repository** to your local machine:

    ```bash
    git clone https://github.com/your-username/user-management-app.git
    ```

2. **Navigate to the project folder**:

    ```bash
    cd user-management-app
    ```

3. **Install project dependencies**:

    ```bash
    npm install
    ```

    This will install all required libraries and dependencies listed in the `package.json` file.

## Usage

### Run the Application Locally

1. **Start the development server**:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

2. **Navigate through the pages**:
    - **Home Page**: Displays a list of all users.
    - **Add User Page**: A form to add a new user.
    - **Update User Page**: Allows you to update existing user details.

### Accessing the Application

- Open your browser and visit [http://localhost:3000](http://localhost:3000).
- You will be redirected to the home page that displays the list of users. You can navigate to the **Add User** and **Update User** pages using the buttons and links available in the app.

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
user-management-app/
│
├── public/
│   ├── index.html             # Main HTML file
│   └── favicon.ico            # Project favicon
│
├── src/
│   ├── assets/                # Folder for images, icons, and other static assets
│   │   └── screenshots/       # Screenshots for README or documentation
│   │       ├── home-page.png  # Screenshot of the Home page
│   │       ├── add-user-page.png # Screenshot of Add User page
│   │       └── update-user-page.png # Screenshot of Update User page
│   │
│   ├── components/            # React components
│   │   ├── Navbar.js          # Navbar component
│   │   ├── AddUser.js         # Add User form component
│   │   ├── UpdateUser.js      # Update User form component
│   │   ├── UserList.js        # Display list of users
│   │   └── ...
│   │
│   ├── css/                   # Custom stylesheets
│   │   └── styles.css         # Application styles
│   │
│   ├── App.js                 # Main app component with routing
│   ├── index.js               # Entry point of the app (ReactDOM.render)
│   └── ...
│
├── package.json               # Project metadata and dependencies
├── .gitignore                 # Git ignore file
├── LICENSE                    # License file
├── README.md                  # Project documentation (this file)
└── node_modules/              # Installed npm dependencies (generated after `npm install`)
```
    ## Code Snippets
    Screenshots

