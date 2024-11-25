# Online Bookstore System

## Project Info
- **Project Name**: Online Bookstore System
- **Group Info**: Group 4
  - **Students**:
    - Student 1: Choy Ho Hin, 13379485
    - Student 2: Lai Yiu San, 13032350
    - Student 3: Lau Wing Sing, 13330616
    - Student 4: Li Lok Kei, 11994505
    - Student 5: Yuen Tak Kong Derek, 13225367


## Project File Intro
- **server.js**: 
  - Sets up the Express server and middleware.
  - Connects to MongoDB Atlas.
  - Defines routes for user authentication, CRUD operations, and RESTful APIs.
- **package.json**: 
  - Lists dependencies such as `express`, `mongoose`, `ejs`, `body-parser`, `cookie-session`, `axios`, and `method-override`.
- **public** (folder, if you have): 
  - Contains static files such as CSS, JavaScript, and images.
- **views** (folder): 
  - Contains EJS templates for rendering HTML pages.
  - Files included: `welcome.ejs`, `login.ejs`, `register.ejs`, `books.ejs`, `search.ejs`.
- **models** (folder): 
  - Contains Mongoose schema definitions.
  - Files included: `User.js`, `Book.js`.
- **routes** (folder): 
  - Contains route definitions for the application.
  - **index.js** : Define the routes for user authentication (login, register, logout), CURD operation for books, search funtionality using Google Books API, and RESTful API endpoints for books. 

## Cloud-Based Server URL
- Your Cloud URL

## Operation Guides

### Login/Logout Pages
1. **Login Page**:
   - Navigate to `/login`.
   - Enter your username and password.
   - Click the "Login" button.
   - If you don't have an account, click the "Register" button to go to the registration page.
2. **Register Page**:
   - Navigate to `/register`.
   - Enter a username and password.
   - Click the "Register" button.
   - After registration, you will be redirected to the login page.
3. **Logout**:
   - Click the "Logout" button available on the CRUD pages to log out.

### CRUD Web Pages
1. **Create**:
   - Navigate to `/books`.
   - Fill in the form with the book's title, author, and genre.
   - Click the "Add Book" button to create a new book entry.
2. **Read**:
   - Navigate to `/books`.
   - View the list of books displayed on the page.
3. **Update**:
   - Navigate to `/books`.
   - Use the update form next to each book entry to modify the title, author, or genre.
   - Click the "Update" button to save changes.
4. **Delete**:
   - Navigate to `/books`.
   - Click the "Delete" button next to the book entry you want to remove.
5. **Search**:
   - Navigate to `/books`.
   - Use the search form at the top of the page to search for books using the Google Books API.
   - Enter a query and click the "Search" button.
   - The search results will be displayed on a new page.

### RESTful CRUD Services
1. **Read API**:
   - **Endpoint**: `/api/books`
   - **Method**: GET
   - **Description**: Retrieves a list of all books.
   - **CURL Command**:
     ```bash
     curl -X GET http://localhost:3000/api/books
     ```
2. **Create API**:
   - **Endpoint**: `/api/books`
   - **Method**: POST
   - **Description**: Creates a new book.
   - **CURL Command**:
     ```bash
     curl -X POST http://localhost:3000/api/books -H "Content-Type: application/json" -d '{"title":"Book Title", "author":"Author Name", "genre":"Genre"}'
     ```
3. **Update API**:
   - **Endpoint**: `/api/books/:id`
   - **Method**: PUT
   - **Description**: Updates an existing book by ID.
   - **CURL Command**:
     ```bash
     curl -X PUT http://localhost:3000/api/books/<book_id> -H "Content-Type: application/json" -d '{"title":"Updated Title", "author":"Updated Author", "genre":"Updated Genre"}'
     ```
4. **Delete API**:
   - **Endpoint**: `/api/books/:id`
   - **Method**: DELETE
   - **Description**: Deletes a book by ID.
   - **CURL Command**:
     ```bash
     curl -X DELETE http://localhost:3000/api/books/<book_id>
     ```

## Notes
- Ensure you replace `<book_id>` with the actual ID of the book you want to update or delete.
- The `README.md` is crucial for understanding the project functions and is essential for grading.

