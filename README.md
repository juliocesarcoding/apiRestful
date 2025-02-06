# 🌐 Movie API Project - RESTful

This project is a **RESTful API** built using **Node.js**, **TypeScript**, and **Express**, with a focus on clean architecture and best practices. It handles operations related to movies, including fetching, inserting, and validating movie data sourced from a CSV file.

The project uses **SQLite** for database storage via **better-sqlite3** for performance and simplicity. Additionally, it follows **SOLID principles** and incorporates **Clean Code** practices for maintainability and scalability.

---

## 📄 **Project Features**

- **RESTful API**: Well-structured routes and controllers for movie data.
- **Database Integration**: Uses **SQLite** with in-memory support for testing.
- **CSV Data Import**: Automatically populates the database with movie data from a CSV file.
- **Integration Tests**: Written using **Jest** and **Supertest**.
- **Error Handling**: Centralized error responses with clear messages.
- **SOLID Principles & Clean Code**: Ensures the project is easy to understand, extend, and maintain.

---

## 🔧 **Tech Stack**

- **Node.js**
- **TypeScript**
- **Express**
- **better-sqlite3** (for SQLite integration)
- **Jest** & **Supertest** (for testing)
- **csv-parser** (for CSV file handling)

---

## 🚀 **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/juliocesarcoding/apiRestful.git
cd movie-api
```

---

### **2. Install Dependencies**

```bash
npm install
```

---

### **3. Run the Application**

The application automatically populates the database on startup using a CSV file located in `/public/Movielist.csv`.

```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/movies`.

---

### **4. Running Tests**

The project uses **Jest** and **Supertest** for testing. The tests are configured to use an **in-memory SQLite database** to ensure they do not interfere with production data.

```bash
npm test
```

To see detailed logs during tests:

```bash
npm test --verbose
```

---

## 💡 **API Endpoints**

### **Movies Endpoints**

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| GET    | `/api/movies`     | Fetch all movies               |
| GET    | `/api/movies/:id` | Fetch a movie by its ID        |
| GET    | `/api/awards`     | Get producers with awards info |

### **Example API Responses**

**Success (200 OK):**

```json
{
 "success": true,
 "message": "Movies fetched successfully",
 "data": [
  { "id": 1, "title": "Can't Stop the Music", "year": 1980 },
  { "id": 2, "title": "Cruising", "year": 1980 }
 ],
 "error": null
}
```

**Error (404 Not Found):**

```json
{
 "success": false,
 "message": "Movie not found",
 "data": null,
 "error": null
}
```

---

## 🌟 **Project Structure**

```
movie-api/
├── src/
│   ├── controllers/      # API controllers for handling requests
│   ├── database/         # Database initialization and seed scripts
│   ├── models/           # Movie model definition
│   ├── routes/           # API routes
        ├── {file}.tests/ # Jest and Supertest integration tests
│   ├── services/         # Business logic and database services
│   └── utils/            # Utility functions (e.g., response handlers)
│
├── public/               # CSV file for populating database
├── jest.config.ts        # Jest configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and scripts
```

---

## 🔒 **Environment Configuration**

### **Environment Variables**

The Environment Variables in this project is disabled, becausa is unnecessary put it just for port in this case.

### **Scripts**

- **`npm run dev`** - Run the application in development mode.
- **`npm test`** - Run Jest tests with in-memory database.

---

## 🚫 **Error Handling & Response Format**

All API responses follow a **consistent structure** to ensure clarity and ease of use.

### **Standard Response Structure:**

```json
{
 "success": true,
 "message": "Resource fetched successfully",
 "data": {
  /* Actual response data */
 },
 "error": null
}
```

### **Error Response Structure:**

```json
{
 "success": false,
 "message": "Resource not found",
 "data": null,
 "error": "Detailed error message (if any)"
}
```
