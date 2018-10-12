# Wunder App

## Getting Started

1. Clone repository and change the name of the file .env.example to .env

2. Inside .env file insert the credentials from your MySQL Database.

3. There are two options to create the table, you can use Artisan (Laravel CLI), just open a console, go to the project folder and use 

    ``` php artisan migrate```

    The other options is load the ```Create Table Script``` inside the project folder in the database folder is the sql file to create the table.

4. After the Database is set, start the server with Artisan using the command 

    ```php artisan serve```

    This will start the backend in localhost:8000.

5. With the server running start the client, go to the client folder in client_react and run 

    ```npm start```

    This will execute the client in localhost:3000