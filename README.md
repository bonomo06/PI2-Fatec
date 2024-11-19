<h1>Capstone Project - Fatec - Symptom and Virus Management API</h1>

This project is an API built with Node.js, Express, Prisma, and MySQL, designed to manage records of users, symptoms, and viruses. It provides CRUD functionality and is set up for deployment on Render with a MySQL database hosted on Railway.

## Technologies Used
- **Node.js**
- **Express**
- **Prisma ORM**
- **MySQL**
- **Docker**
- **Railway** (Database)
- **Render** (API Hosting)

## Database Structure
- **users** - Stores user data.
- **virus** - Records virus details.
- **sintomas** - Holds information on symptoms.
- **user_sintomas** - User-Symptom Association.
- **user_virus** - User-Virus Association.

## Project Setup

### Requirements
- Node.js
- MySQL
- Docker (optional)
- Render and Railway accounts

### Environment Variables
Set up a `.env` file with:
```plaintext
DATABASE_URL="mysql://username:password@host:port/database"

### Commands

Clone the repository:

```bash
git clone https://github.com/bonomo06/PI2-Fatec.git
cd PI2-Fatec
```

Install dependencies: 

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Apply database migrations:

```bash
npx prisma db push
```

Start the server:

```bash
npm run dev
```
The API will be accessible at http://localhost:3000

### API Endpoints
**Users:**

GET /api/users - Retrieves all users.
GET /api/users/:id - Retrieves an user by id.
POST /api/users - Creates a new user.
DELETE /api/users/:id - Delete an user.

**Symptoms:**

GET /api/sintomas - Retrieves all symptoms.
GET /api/sintomas/:id - Retrieve a symptom by id.
GET /api/sintomas/get/user-symptom - Retrieves all user-symptom association.
GET /api/sintomas/count/:id - Symptom count.
POST /api/sintomas - Adds a new symptom.
DELETE /api/sintomas/:id - Delete a symptom.

**Virus:**

GET /api/virus - Retrieves all viruses.
GET /api/virus/:id - Retrieve a virus by id.
GET /api/virus/get/user-virus - Retrieves all user-virus associations.
GET /api/virus/count/:id - Virus count.
POST /api/virus - Adds a new virus.
POST /api/user-virus - Adds a new user-virus association.
DELETE /api/virus/:id - Delete a virus.

### Testing with Thunder Client
Use Thunder Client or Postman for testing API routes.

### Docker Setup
The project includes a Dockerfile. When deploying on Render, configure environment variables directly on the platform.

### Interfaces

**Users:**
{
    "email": "...",
    "name": "..."
}

**Symptoms:**
{
    "name":
}

**Virus:**
{
    "name":
}

**User-Symptom:**
{
    "userId": ,
    "symptomId":
}

**User-Virus:**
{
    "userId": ,
    "virusId":
}