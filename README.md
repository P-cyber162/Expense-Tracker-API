Expense Tracker API

A full-featured backend API for managing personal expenses. Built with Node.js, Express, and MongoDB, this project demonstrates authentication, category and expense management, and summary reporting. Designed for scalability, maintainability, and real-world use.

📂 File Architecture
expense-tracker-api/
│
├── config/
│   └── db.js                  # Database connection
│
├── controllers/
│   ├── authController.js       # Handles authentication logic
│   ├── categoryController.js   # Handles CRUD for categories
│   ├── expenseController.js    # Handles CRUD for expenses
│   └── summaryController.js    # Handles summaries & statistics
│
├── models/
│   ├── userModel.js            # User schema
│   ├── categoryModel.js        # Category schema
│   └── expenseModel.js         # Expense schema
│
├── routes/
│   ├── authRoutes.js           # Authentication endpoints
│   ├── categoryRoutes.js       # Category endpoints
│   ├── expenseRoutes.js        # Expense endpoints
│   └── summaryRoutes.js        # Summary/statistics endpoints
│
├── utils/
│   ├── errorMiddleware.js      # Global error handler
│   └── apiFeatures.js          # Query features (filter, sort, pagination)
│
├── data/
│   ├── expenses.json           # Sample expense data
│   ├── categories.json         # Sample category data
│   └── users.json              # Sample user data
│
├── app.js                      # Configures Express app & routes
├── server.js                   # Starts server and connects DB
├── .env                        # Environment variables
├── .gitignore                  # Files to ignore in Git
├── package.json                # Node.js dependencies & scripts
└── README.md                   # Project documentation

🚀 Features
Authentication

User registration and login

JWT-based authentication

Protected routes

Categories

Add, update, delete categories

View all categories

Expenses

Add, update, delete expenses

Filter by date, category, or amount

Get all expenses

Summary

Monthly expense summaries

Category-based statistics

Total expense overview

Utilities

Global error handling

API query features (pagination, filtering, sorting)

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT, bcryptjs

Environment Variables: dotenv

Utilities: apiFeatures.js for query handling, errorMiddleware.js for global error handling

⚙️ Installation & Setup

Clone the repository:

git clone <repo-url>


Navigate to the project folder:

cd expense-tracker-api


Install dependencies:

npm install


Create a .env file and add:

PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d


Start the server (development):

npm run dev


The API will run at:

http://localhost:3000

📬 API Endpoints Overview
Auth
Method	Endpoint	Description
POST	/api/v1/auth/signup	Register a new user
POST	/api/v1/auth/login	Login existing user
Categories
Method	Endpoint	Description
POST	/api/v1/category	Create a new category
GET	/api/v1/category	Get all categories
PATCH	/api/v1/category/:id	Update a category by ID
DELETE	/api/v1/category/:id	Delete a category by ID
Expenses
Method	Endpoint	Description
POST	/api/v1/expense	Add a new expense
GET	/api/v1/expense	Get all expenses
PATCH	/api/v1/expense/:id	Update an expense by ID
DELETE	/api/v1/expense/:id	Delete an expense by ID
Summary
Method	Endpoint	Description
GET	/api/v1/summary/monthly	Get monthly expense summary
GET	/api/v1/summary/category	Get expense summary grouped by category
