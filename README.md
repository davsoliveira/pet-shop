# Mundo Pet

This project was developed as part of level 02 of Rocketseat's Next.js course.

## [View the project here](https://pet-shop-davs.vercel.app/)

## Table of contents

- [Overview](#overview)
  - [My Process](#my-proccess)
  - [Screenshots](#screenshots)
- [How to Run the Project](#how-to-run-the-project)
- [Developed with](#developed-with)
- [Author](#author)

## Overview

Mundo Pet is a scheduling application for a pet shop environment, where users can create appointments within available time slots, as well as view, edit, and delete existing schedules.

The goal of this project is to practice building a fullstack application using modern Next.js features and a solid stack for form handling and data validation.

### My Process

This project was built using Next.js, React, and TypeScript, with Prisma as the ORM and PostgreSQL as the database.

One of the main focuses was working with Server Actions to handle form submissions and database operations, as well as using React Hook Form together with Zod for form management and validation.

This project helped me better understand how to structure fullstack applications with Next.js and improve my database integration skills.

### Screenshots

#### Creating appointment

![](screenshots/desktop.gif)

#### Desktop

![](screenshots/desktop.png)

## How to Run the Project

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone "https://github.com/davsoliveira/pet-shop"
   ```

2. Navigate to the project folder:

   ```bash
   cd pet-shop

   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables:
   Create a `.env` file in the root of the project and add:

   ```bash
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mundopet"
   ```

5. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

## Developed with

- TypeScript
- Next.js
- React
- Tailwind
- Prisma
- PostgreSQL
- React Hook Form
- Zod
- Server Actions

## Author

- GitHub - [davsoliveira](https://github.com/davsoliveira)
- My portfolio - [Davi Oliveira](https://davsoliveira.github.io/portfolio/)
