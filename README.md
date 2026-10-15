# Course Registration System

A backend API built with Node.js and Express.js for managing courses and student course registrations. It follows the MVC-style structure (Model, Controller, Router) and uses JSON files as a makeshift database instead of a real database. This project was built by Group 7 to practise team collaboration with Git and GitHub, using individual branches, commits and reviewed pull requests.

## Features

- Create, view, replace, update and delete courses
- Create, view, replace, update and delete student registrations
- Request logging middleware that prints every request to the console and saves it to `logs.txt`
- Data stored in JSON files (no MongoDB, MySQL or any other database)

## Technologies Used

- Node.js
- Express.js
- JSON files for data storage
- Nodemon (optional, for development)
- Git and GitHub

## Project Structure

```
course-registration-system/
├── controller/
│   └── user.js
├── middleware/
│   └── logger.js
├── model/
│   ├── courses.json
│   └── registration.json
├── router/
│   └── router.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

| File/Folder               | Purpose                                                                         |
| ------------------------- | ------------------------------------------------------------------------------- |
| `controller/user.js`      | Handles CRUD operations for courses and registrations                           |
| `middleware/logger.js`    | Logs every incoming request to the console and `logs.txt`                       |
| `model/courses.json`      | Stores course records                                                           |
| `model/registration.json` | Stores registration records                                                     |
| `router/router.js`        | Defines API endpoints and connects them to controller functions                 |
| `server.js`               | Configures and starts the Express server and connects the router and middleware |
| `package.json`            | Stores project dependencies and scripts                                         |
| `package-lock.json`       | Records the exact dependency versions installed                                 |
| `.gitignore`              | Stops `node_modules/` and `logs.txt` from being tracked by Git                  |
| `README.md`               | Documents the project, setup instructions, endpoints and team members           |

## How to Run

**Requirements:** Node.js and npm installed on your computer.

1. Clone the repository:

```bash
   git clone https://github.com/NeoSageCodes/course-registration-system.git
```

2. Move into the project folder:

```bash
   cd course-registration-system
```

3. Install the dependencies:

```bash
   npm install
```

4. Start the server:

```bash
   npm start
```

To run with automatic restart when files change (requires Nodemon):

```bash
   npm run dev
```

5. The server runs at `http://localhost:2312`.

Run the commands from the project root folder (where `server.js` is), because the JSON file paths are relative to it.

## API Endpoints

Use Postman, Thunder Client or any API client to test the endpoints.

### Courses

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/courses`     | Create a course         |
| GET    | `/courses`     | Get all courses         |
| GET    | `/courses/:id` | Get one course by ID    |
| PUT    | `/courses/:id` | Replace a course        |
| PATCH  | `/courses/:id` | Update part of a course |
| DELETE | `/courses/:id` | Delete a course         |

Example body for `POST /courses`:

```json
{
  "course": "Backend Development",
  "instructor": "Mr. Adeyemi"
}
```

### Registrations

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/registrations`     | Create a registration         |
| GET    | `/registrations`     | Get all registrations         |
| GET    | `/registrations/:id` | Get one registration by ID    |
| PUT    | `/registrations/:id` | Replace a registration        |
| PATCH  | `/registrations/:id` | Update part of a registration |
| DELETE | `/registrations/:id` | Delete a registration         |

Example body for `POST /registrations`:

```json
{
  "studentName": "Jane Doe",
  "gender": "Female",
  "enrolledCourse": "CS1"
}
```

Course IDs look like `CS1`, `CS2`, and registration IDs look like `REG001`, `REG002`. They are generated automatically.

## Team Members

| Name                     | GitHub Username                                                           | Responsibility                                              |
| ------------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Chigoziem John Ogbonnaya | [NeoSageCodes](https://github.com/NeoSageCodes)                           | Team lead, controller and README                            |
| Adele Omotayo            | [adeleomotayo941-cpu](https://github.com/adeleomotayo941-cpu)             | Logger middleware and initial JSON data                     |
| Nwosu Lucky              | [chinyereugonwosulucky-hue](https://github.com/chinyereugonwosulucky-hue) | Server setup, Express/Nodemon configuration and integration |
| Ezimah Chinonso Raphael  | [chinonsoraphael](https://github.com/chinonsoraphael)                     | Router, endpoint definitions and controller connections     |

## Git Collaboration Workflow

- The `main` branch is protected by a GitHub ruleset, so nobody pushes directly to it.
- Every team member worked on their own branch.
- Changes were merged into `main` through pull requests, each approved by a teammate other than the author.
