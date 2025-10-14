# Backend Setup for Hearing Clinic

## Quick Start

### 1. Start the Backend Server
```bash
npm run server
```

### 2. Start the Frontend (in a new terminal)
```bash
npm run dev
```

### 3. Or run both simultaneously
```bash
npm run dev:full
```

## API Endpoints

### Contact Form Submission
- **POST** `/api/contact`
- **Body**: `{ name, email, phone, message }`
- **Response**: Success/error message with contact ID

### Get All Contacts (Admin)
- **GET** `/api/contacts`
- **Response**: Array of all contact submissions

### Update Contact Status (Admin)
- **PATCH** `/api/contacts/:id/status`
- **Body**: `{ status: "new" | "contacted" | "resolved" }`

## Database
- **MongoDB Atlas**: Connected to `hearing-clinic` database
- **Collection**: `contacts`
- **Schema**: name, email, phone, message, createdAt, status

## Environment Variables
The MongoDB connection string is hardcoded in `server.js` for this setup. In production, use environment variables.

## Testing
1. Start the backend server (`npm run server`)
2. Start the frontend (`npm run dev`)
3. Navigate to `/contact` page
4. Fill out and submit the contact form
5. Check MongoDB Atlas to see the saved contact
