# Exhibitly Frontend

This is a full-stack web application that allows users to browse and manage an art gallery. Users can search for artworks, view artwork details, and add them to their personal collection (exhibition). The app is built using React for the frontend and a backend server to handle the data.

## Features
User Authentication: Users can log in with their credentials to access the app.
Artworks: Browse a gallery of artworks with images and descriptions.
Search Functionality: Users can search for artworks by name or category.
Collection Management: Users can add artworks to their personal collection (exhibition).
Responsive Design: The application is fully responsive, optimized for both desktop and mobile screens.
## Technologies Used
### Frontend:
React
React Router
CSS (Flexbox, Grid)
Google Fonts
### Backend:
Node.js
Express
MongoDB
RESTful API for handling requests
### Hosting:
Frontend: Render
Backend: Render
## Setup Instructions
### Prerequisites
Ensure you have the following tools installed:

Node.js: Download Node.js
npm: Comes with Node.js, but can be updated separately if needed.

Set the backend up from this repo <https://github.com/Kamilla2424/Exhibitly-BE> - the instrcutions will be in that readme.

### Frontend Setup

npm install

npm run dev
The frontend should now be running on http://localhost:5173.

Usage
Login: Users can log in using their credentials.
Search: A search bar allows users to filter artworks by name.
Browse Artworks: Artworks are displayed with images and titles.
Add to Collection: Users can add artworks to their collection by clicking the "Add to Exhibition" button.
Responsive: The layout adapts to both desktop and mobile screens.

API Documentation
The frontend uses these apis for artworks:
<https://api.harvardartmuseums.org/object>
<https://openaccess-api.clevelandart.org/api/artworks/>

The backend exposes the following endpoints:

GET /api/users: Gets all users.
POST /api/users: Register a new user.

Deployment
Frontend: <https://exhibitly-fe.onrender.com>
Backend: <https://exhibitly-be.onrender.com>
