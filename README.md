<h1 align="center">Welcome in Physio Backend</h1>


Physio Backend is for authenticate credentials and generate token.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Folder Structure](#folder-structure)

## Technology Stack

Our backend leverages the following technologies to provide a secure and scalable e-commerce solution:

- **Node.js:** A server-side JavaScript runtime for building fast and scalable network applications.

- **Express.js:** A minimal and flexible Node.js web application framework that simplifies the development of robust APIs.

- **JSON Web Tokens (JWT):** Secure user authentication and authorization.

## Getting Started

### Prerequisites

Before you start, ensure you have met the following requirements:

- **Node.js:** Install Node.js (LTS version) from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```shell
   git clone https://github.com/Anuradhagupta28/physio-backend.git

2. **Install Dependencies:**

    ```shell
    cd physio-backend
    npm install / npm i

### Running the Server

Start the backend server:

    ```
    npm start
    # or
    node server.js
    # or
    npm run start
    ```

## API Endpoints

   Endpoints : /api/login_v1   (Generate token and verify by its credentials)
   <br>
   Endpoints : /api/dashboard  (After successful login move to welcome dashboard)

## Backend Deployment URL

<strong>
  <a href="https://physio-backend.onrender.com/">Click Here</a>
</strong>