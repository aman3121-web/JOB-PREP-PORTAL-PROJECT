# Job Prep Portal Project

Job Prep Portal is a full-stack web application that helps users prepare for job interviews. Users can register, log in, upload a resume, paste a target job description, add a self-description, and generate an AI-powered interview preparation report.

The generated report includes a role match score, technical interview questions, behavioral interview questions, skill gaps, a day-wise preparation roadmap, and an option to generate a tailored resume PDF.

## Features

- User registration, login, logout, and protected routes
- JWT authentication stored in cookies
- Token blacklist support for logout
- Resume upload with in-memory file handling
- Resume text extraction from PDF files
- AI-generated interview preparation reports using Google GenAI
- Match score based on resume, profile, and job description
- Technical and behavioral questions with intentions and suggested answers
- Skill gap analysis with severity levels
- Day-wise preparation plan
- Recent interview report history
- Tailored resume PDF generation with Puppeteer

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Sass
- ESLint

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser
- cors
- multer
- pdf-parse
- Google GenAI SDK
- Zod
- Puppeteer

## Project Structure

```text
JOB PREP PORTAL PROJECT/
|-- Backend/
|   |-- server.js
|   |-- package.json
|   `-- src/
|       |-- app.js
|       |-- config/
|       |   `-- database.js
|       |-- controllers/
|       |   |-- auth.controller.js
|       |   `-- interview.controller.js
|       |-- middlewares/
|       |   |-- auth.middleware.js
|       |   `-- file.middleware.js
|       |-- models/
|       |   |-- blacklist.model.js
|       |   |-- interviewReport.model.js
|       |   `-- user.model.js
|       |-- routes/
|       |   |-- auth.routes.js
|       |   `-- interview.routes.js
|       `-- services/
|           `-- ai.service.js
|-- Frontend/
|   |-- index.html
|   |-- package.json
|   |-- vite.config.js
|   `-- src/
|       |-- App.jsx
|       |-- app.routes.jsx
|       |-- main.jsx
|       |-- features/
|       |   |-- auth/
|       |   `-- interview/
|       `-- style/
`-- README.md
```

## Prerequisites

Install these before running the project:

- Node.js
- npm
- MongoDB database, local or hosted
- Google GenAI API key

## Environment Variables

Create a `.env` file inside the `Backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

## Installation

Install backend dependencies:

```bash
cd Backend
npm install
```

Install frontend dependencies:

```bash
cd ../Frontend
npm install
```

## Running the Project

Start the backend server:

```bash
cd Backend
npm run dev
```

The backend runs on:

```text
http://localhost:3000
```

Start the frontend development server in another terminal:

```bash
cd Frontend
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Available Scripts

### Backend

```bash
npm run dev
```

Starts the Express server using nodemon.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the frontend for production.

```bash
npm run lint
```

Runs ESLint on the frontend code.

```bash
npm run preview
```

Previews the production build locally.

## API Endpoints

### Auth Routes

Base URL:

```text
/api/auth
```

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/register` | Register a new user | Public |
| POST | `/login` | Log in a user | Public |
| GET | `/logout` | Log out user and blacklist token | Public |
| GET | `/get-me` | Get logged-in user details | Private |

### Interview Routes

Base URL:

```text
/api/interview
```

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/` | Generate an interview report | Private |
| GET | `/` | Get all reports for the logged-in user | Private |
| GET | `/report/:interviewId` | Get one interview report by ID | Private |
| POST | `/resume/pdf/:interviewReportId` | Generate a tailored resume PDF | Private |

## Main User Flow

1. Register or log in.
2. Paste a target job description.
3. Upload a resume PDF and/or add a self-description.
4. Generate an AI interview strategy.
5. Review technical questions, behavioral questions, skill gaps, and preparation roadmap.
6. Download a tailored resume PDF based on the report.

## Current Notes

- The backend is configured to accept requests from `http://localhost:5173`.
- The backend listens on port `3000`.
- Authentication uses a `token` cookie.
- Uploaded files are stored in memory and limited to 3 MB on the backend.
- Resume parsing is implemented with `pdf-parse`, so PDF resumes are the supported format in the backend.
- The frontend file input currently displays PDF or DOCX, but the backend parser is PDF-focused.
- No automated backend tests are currently configured.

## License

This project is currently licensed under ISC, as defined in the backend `package.json`.
