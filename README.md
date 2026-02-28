# meowifier-web

`meowifier-web` is a project that demonstrates the use of [`React`](https://react.dev/) for the frontend and [`Flask`](https://flask.palletsprojects.com/en/stable/) for the backend

![example](https://github.com/krovskiy/meowifier-web/blob/main/example.gif)

## features

enter any text => stretch vowels and add occasional `meows`

## installation

### prerequisites

- Node.js and npm
- Python and pip

### steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/krovskiy/meowifier
    cd meowifier
    ```

2. **install frontend dependencies**:
    ```sh
    cd meowifier
    npm install
    ```

3. **install backend dependencies**:
    ```sh
    python -m venv .
    // windows
    .\Scripts\activate
    // linux
    source bin/activate
    pip install flask flask-cors
    ```

## usage

### running the frontend

1. navigate to the directory:
    ```sh
    cd meowifier
    ```

2. start the development server:
    ```sh
    npm run dev
    ```

### Running the Backend

start the flask server:
    ```
    python app.py
    ```

### access

`http://localhost:3000` to access the meowifier application
