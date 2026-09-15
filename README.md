# MegaBlog

MegaBlog is a modern blog application built with React and Appwrite. It allows users to create accounts, publish blog posts, manage content, and browse articles in a clean, responsive interface.

## Overview

This project demonstrates a full-stack-style frontend experience using Appwrite for authentication, database storage, and file uploads. The application includes protected routes for authenticated users, a rich-text editor for content creation, and a Redux-powered authentication flow.

## Features

- User sign up and login with Appwrite authentication
- Protected routes for authenticated users only
- Create, edit, and delete blog posts
- View individual posts and a list of all published articles
- Rich text post editing using TinyMCE
- Featured image upload support via Appwrite Storage
- Redux Toolkit-based global auth state management
- Responsive blog layout for desktop and mobile devices

## Tech Stack

- React 19
- Vite
- React Router
- Redux Toolkit + React Redux
- Appwrite
- TinyMCE
- HTML React Parser
- React Hook Form

## Project Structure

```text
MegaBlog/
├── public/
├── src/
│   ├── appwrite/
│   │   ├── auth.js
│   │   └── config.js
│   ├── components/
│   ├── conf/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── .env
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js 18 or later
- npm or yarn
- An Appwrite project with a configured database and storage bucket

## Environment Variables

Create a `.env` file in the root of the project and add the following values:

```env
VITE_APPWRITE_URL=https://your-appwrite-endpoint.com/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_TABLE_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_storage_bucket_id
```

### Appwrite Setup

You need to configure the following in your Appwrite instance:

1. Create a project in Appwrite.
2. Create a database.
3. Create a collection for blog posts.
4. Add fields such as:
   - title
   - content
   - featuredImage
   - status
   - userid
5. Create a storage bucket for featured images.
6. Ensure your project allows authentication and database permissions for the app.

## Installation

```bash
git clone <your-repository-url>
cd MegaBlog
npm install
```

## Running the App

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev     # run development server
npm run build   # create production build
npm run preview # preview production build locally
npm run lint    # run ESLint checks
```

## How the App Works

### Authentication
- Users can sign up or log in through Appwrite.
- Auth state is managed globally using Redux Toolkit.
- Authenticated users can access post creation, editing, and management pages.

### Post Management
- Authors can create posts with a title, content, and featured image.
- Posts are stored in the Appwrite database.
- Each post is retrieved and displayed on the home page and post detail pages.

### Routing
- Public pages: home, login, signup
- Protected pages: all posts, add post, edit post

## Screenshots

Add screenshots here if you want to showcase the UI:

```text
src/assets/...
```

## Production Build

To build the app for production:

```bash
npm run build
```

You can then preview the production build with:

```bash
npm run preview
```

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and build checks
5. Submit a pull request

## License

This project does not currently include a license file. If you plan to distribute it publicly, consider adding an open-source license such as MIT.

## Contact

For questions or collaboration opportunities, reach out via the repository owner or project maintainer.

## Summary

MegaBlog is a polished React-based blogging platform that combines Appwrite services with a modern UI and a seamless content management experience. It is a strong starting point for building a real-world blog application with user authentication and post management features.
