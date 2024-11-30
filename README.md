# Exhibitly Frontend

This is a full-stack web application that allows users to browse and manage an art gallery. Users can search for artworks, view artwork details, and add them to their personal collection (exhibition). The app is built using React for the frontend and a backend server to handle the data.

## Hosted Application Links
- **Frontend**: [https://exhibitly-fe.onrender.com](https://exhibitly-fe.onrender.com)
- **Backend**: [https://exhibitly-be.onrender.com](https://exhibitly-be.onrender.com)

## Features
- **User Authentication**: Users can log in with their credentials to access the app.
- **Artworks**: Browse a gallery of artworks with images and descriptions.
- **Search Functionality**: Users can search for artworks by name or category.
- **Collection Management**: Users can add artworks to their personal collection (exhibition).
- **Responsive Design**: The application is fully responsive, optimized for both desktop and mobile screens.

## Technologies Used

### Frontend:
- React
- React Router
- CSS (Flexbox, Grid)
- Google Fonts

### Backend:
- Node.js
- Express
- MongoDB
- RESTful API for handling requests

### Hosting:
- Frontend: Render
- Backend: Render

## Setup Instructions

### Prerequisites
Ensure you have the following tools installed:
- **Node.js**: [Download Node.js](https://nodejs.org)
- **npm**: Comes with Node.js, but can be updated separately if needed.

Set the backend up from this repo: [Exhibitly Backend](https://github.com/Kamilla2424/Exhibitly-BE) - the instructions will be in that README.

### Frontend Setup

1. Clone the frontend repository to your local machine:
    ```bash
    git clone https://github.com/Kamilla2424/Exhibitly-FE
    ```

2. Navigate into the project directory:
    ```bash
    cd Exhibitly-FE
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```
    The frontend should now be running on [http://localhost:5173](http://localhost:5173).

---

## How to Use

### Login
To access all features, you need to log in. Use the provided test accounts for quick login:
- **Email**: `Kamilla24`
- **Password**: `password123`

Enter the credentials and click on "Log In" to access the full functionality of the app.

### Search for Artworks
Use the **Search Bar** to look up artworks by title or category. As you type in the search term, the application will filter results in real-time. Click on the **Search** button to initiate the search.

### View Artwork Details
Click on any artwork title to view more details. This will take you to a page showing the artwork's description, image, and creation date. You can also see more information via a link to the external art collection page.

### Add Artworks to Your Collection
If you're logged in, you can add artworks to your personal collection (exhibition). Simply click the "**Add to Exhibition**" button next to an artwork's details or "**+**" on the artwork list page.

---

## API Integration

The app integrates with external APIs to fetch artwork data:
- **Harvard Art Museums API**: [https://api.harvardartmuseums.org/object](https://api.harvardartmuseums.org/object)
- **Cleveland Art API**: [https://openaccess-api.clevelandart.org/api/artworks](https://openaccess-api.clevelandart.org/api/artworks)

Additionally, the backend exposes the following endpoints:

| Endpoint             | Description                       |
|----------------------|-----------------------------------|
| `GET /api/users`     | Fetch all users                   |
| `POST /api/users`    | Register a new user               |
