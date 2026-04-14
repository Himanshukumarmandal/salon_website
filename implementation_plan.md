# Full-Stack Web Application for "H S Salon"

This plan outlines the architecture and implementation steps for building the modern, responsive, and fully functional full-stack website for "H S Salon" located in Krishna Nagar, Delhi.

## Architecture & Tech Stack

*   **Frontend**: React.js (via Vite) with Vanilla CSS (Dark luxury theme: black + gold).
*   **Backend**: Node.js + Express.js REST API.
*   **Database**: MongoDB (using Mongoose for modeling).
*   **Structure**: Monorepo style with separate `/frontend` and `/backend` directories within the workspace.

## User Review Required

> [!IMPORTANT]
> - **MongoDB Database**: To fully test this locally and in production, you will need a MongoDB Connection String (e.g., from a free MongoDB Atlas cluster). My code will fall back to an in-memory database or provide clear instructions on where to place your connection string using `.env` files. Are you okay with providing a MongoDB Atlas URI?
> - **Admin Dashboard**: For the simple admin dashboard, I will create a hidden frontend route (`/admin`) that fetches and displays all bookings. For demonstration, I will add a simple hardcoded password check. Is this acceptable for your current needs?

## Proposed Changes

### Backend (`/backend`)

The backend will serve the REST API for handling bookings.

#### [NEW] `backend/package.json`
Dependencies: `express`, `mongoose`, `cors`, `dotenv`.

#### [NEW] `backend/server.js`
Main Express server entry point. Configures middleware (CORS, JSON parsing) and connects to MongoDB.

#### [NEW] `backend/models/Booking.js`
Mongoose schema for a booking:
*   `customerName` (String, required)
*   `phoneNumber` (String, required)
*   `service` (String, required)
*   `appointmentDate` (Date, required)

#### [NEW] `backend/routes/bookings.js`
API Routes:
*   `POST /api/bookings`: Create a new appointment booking.
*   `GET /api/bookings`: Retrieve all bookings (for the admin dashboard).

#### [NEW] `backend/.env.example`
Template for environment variables (e.g., `PORT`, `MONGODB_URI`).

---

### Frontend (`/frontend`)

The frontend will be a React application created with Vite, using pure CSS for styling to ensure maximum customization and adherence to the dark luxury aesthetic.

#### [NEW] `frontend/...` (Vite React App)
I will initialize the app using Vite.

#### [NEW] `frontend/src/index.css` & `frontend/src/App.css`
Implementation of the dark luxury theme (color variables for black, gold, off-white). Typography setup using modern web fonts (e.g., Google Fonts 'Playfair Display' for headings, 'Inter' for body).

#### Frontend Components
*   **Navbar**: Sticky top navigation with links to sections.
*   **Hero Section**: Stunning visual, tagline "Style That Defines You", and a "Book Now" call to action.
*   **About Section**: Brief description of the salon and its expertise.
*   **Services Section**: Grid or list of services (Haircut, Styling, Rebonding, Makeup, Skin Care, Nails, Hair Removal) with approximate prices or descriptions.
*   **Gallery Section**: Photo grid showcasing styles (I will generate high-quality placeholder images or use sophisticated CSS styling).
*   **Reviews Section**: Testimonials grid showing a 4.5 average star rating and 200+ reviews.
*   **Booking Section/Modal**: Form with validation to select a service, date, time, and enter contact details.
*   **Contact & Map**: Address details and Google Maps embed for Krishna Nagar, Delhi.
*   **WhatsApp Button**: Floating fixed button for instant chat.
*   **Admin Dashboard (`/admin`)**: A dedicated view to table or list all incoming bookings fetched from the backend.

---

### Deployment & Documentation

#### [NEW] `DEPLOYMENT.md`
Step-by-step instructions on how to set up environment variables and deploy:
*   Frontend to Netlify/Vercel.
*   Backend to Render/Railway.
*   Database to MongoDB Atlas.

## Open Questions

1.  Do you have specific pricing or detailed descriptions for the services you'd like included, or should I use realistic placeholder text?
2.  Do you have a specific WhatsApp number you'd like linked for the chat button, or should I leave a placeholder snippet that you can easily update?

## Verification Plan

### Automated/Local Tests
- Start the Express backend locally and verify database connection.
- Test `GET` and `POST` booking API endpoints using backend scripts or frontend integration.
- Run the React frontend development server to ensure all sections render beautifully.
- Test the responsive layout on mobile viewport sizes locally.

### Manual Verification
- Ask the user to run both the frontend and backend locally.
- Instruct the user to submit a test booking from the frontend.
- Ask the user to navigate to the `/admin` page, verify the data, and review the overall aesthetics.
