# Meowifier

Meowifier is a project that demonstrates the use of React for the frontend and Flask for the backend

## Features

Enter any text, and the meowifier will transform it by randomly replacing some words with "meow" and stretching vowels in others.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: Styling the application.

### Backend

- **Flask**: A lightweight WSGI web application framework in Python.
- **Flask-CORS**: A Flask extension for handling Cross-Origin Resource Sharing (CORS).

## Installation

### Prerequisites

- Node.js and npm
- Python and pip

### Steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/krovskiy/meowifier
    cd meowifier
    ```

2. **Install frontend dependencies**:
    ```sh
    cd meowifier
    npm install
    ```

3. **Install backend dependencies**:
    ```sh
    pip install flask flask-cors
    ```

## Usage

### Running the Frontend

1. navigate to the directory:
    ```sh
    cd meowifier
    ```

2. start the development server:
    ```sh
    npm run dev
    ```

### Running the Backend

1. navigate to the project root directory:
    ```sh
    cd ..
    ```

2. start the flask server:
    ```sh
    python app.py
    ```

### Accessing the application

Open your web browser and go to `http://localhost:3000` to access the meowifier application.