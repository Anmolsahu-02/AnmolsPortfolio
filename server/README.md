# Portfolio Server

Node.js Express server with MongoDB for managing portfolio projects.

## Setup

1. Install dependencies: `pnpm install`
2. Set up MongoDB (local or cloud) and update MONGODB_URI in .env
3. Run: `pnpm run dev`

## API Endpoints

- GET /api/projects - Get all projects
- POST /api/projects - Create new project
- PUT /api/projects/:id - Update project
- DELETE /api/projects/:id - Delete project

## Project Schema

- title: String
- description: String
- technologies: Array of Strings
- githubUrl: String
- liveUrl: String
- imageUrl: String
- createdAt, updatedAt: Timestamps