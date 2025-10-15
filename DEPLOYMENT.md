# 🚀 Two-Service Deployment Guide for Hearing Clinic Website

## Deploying to Render (Separate Frontend & Backend)

This guide deploys your app as **two separate services** on Render:
- **Frontend**: Static Site (React app)
- **Backend**: Web Service (Express API)

### Prerequisites
- GitHub repository with your code
- MongoDB Atlas account (for database)
- Render account

### Step 1: Prepare Your Repository
1. Make sure all your code is committed and pushed to GitHub
2. Ensure your `package.json` has the correct scripts:
   - `"start": "node server.js"`
   - `"build": "vite build"`

### Step 2: Set Up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier is fine)
3. Create a database user
4. Get your connection string
5. Whitelist all IP addresses (0.0.0.0/0) for Render

### Step 3: Deploy BACKEND as Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `hearing-clinic-backend` (or your preferred name)
   - **Environment**: Node
   - **Root Directory**: Leave blank (uses root)
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. **Environment Variables** (Backend):
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `your-mongodb-connection-string`
   - `FRONTEND_URL` = `https://your-frontend-name.onrender.com` (you'll get this after deploying frontend)

6. Deploy and note the backend URL: `https://your-backend-name.onrender.com`

### Step 4: Deploy FRONTEND as Static Site

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `hearing-clinic-frontend` (or your preferred name)
   - **Root Directory**: Leave blank (uses root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Plan**: Free

5. **Environment Variables** (Frontend):
   - `VITE_API_URL` = `https://your-backend-name.onrender.com/api`

6. Deploy and note the frontend URL: `https://your-frontend-name.onrender.com`

### Step 5: Update Backend CORS

After both services are deployed, update the backend environment variable:
- Go to your backend service in Render
- Update `FRONTEND_URL` to your actual frontend URL
- Redeploy the backend service

## How It Works

### Production Setup
- **Frontend**: React app built with Vite, served by Render's CDN
- **Backend**: Express API server running on Render
- **Database**: MongoDB Atlas for data storage
- **Communication**: Frontend makes API calls to backend URL

### File Structure
```
/
├── src/
│   ├── components/     # React components
│   ├── pages/         # React pages
│   ├── api.js         # API configuration
│   └── ...
├── server.js          # Express backend server
├── package.json       # Dependencies and scripts
└── dist/             # Built React app (created during build)
```

### API Configuration
The frontend uses `src/api.js` to communicate with the backend:
```javascript
// Uses VITE_API_URL environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

### API Endpoints
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission
- `GET /api/contacts` - Get all contacts
- `POST /api/appointments` - Book appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/date/:date` - Get appointments for specific date

### Environment Variables Summary

#### Backend Service:
- `NODE_ENV` = `production`
- `MONGODB_URI` = `your-mongodb-connection-string`
- `FRONTEND_URL` = `https://your-frontend-name.onrender.com`

#### Frontend Service:
- `VITE_API_URL` = `https://your-backend-name.onrender.com/api`

### Troubleshooting

#### Backend Issues
- Check MongoDB connection string
- Verify CORS settings match frontend URL
- Check server logs for errors

#### Frontend Issues
- Verify `VITE_API_URL` environment variable
- Check browser console for API errors
- Ensure backend is running and accessible

#### CORS Issues
- Make sure `FRONTEND_URL` in backend matches your actual frontend URL
- Check that backend allows the frontend origin

### Performance Tips
- Use MongoDB Atlas free tier (512MB storage)
- Render free tier has limitations (sleeps after 15 minutes of inactivity)
- Static site has better performance than web service for frontend
- Consider upgrading to paid plans for production use

### Security Notes
- Environment variables are secure in Render
- CORS is configured for production
- Database credentials are not exposed in code
- API communication is over HTTPS