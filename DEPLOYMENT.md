# 🚀 Deployment Guide - Hearing Clinic Website

## Overview
This project contains both frontend (React + Vite) and backend (Node.js + Express) in the same repository. We'll deploy them as **two separate services** on Render.

## 📋 Prerequisites
- GitHub repository with your code
- Render account (free tier available)
- MongoDB Atlas database

## 🔧 Step 1: Prepare Your Repository

### 1.1 Environment Variables
Create a `.env` file in your project root:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
PORT=10000
```

### 1.2 Update API URLs
Update your frontend to use the backend URL in production. In your React components, replace:
```javascript
// Development
const API_URL = 'http://localhost:5000';

// Production
const API_URL = 'https://hearing-clinic-backend.onrender.com';
```

## 🌐 Step 2: Deploy Backend Service

### 2.1 Create Backend Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:

**Service Settings:**
- **Name**: `hearing-clinic-backend`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Plan**: Free

**Environment Variables:**
- `NODE_ENV` = `production`
- `MONGODB_URI` = `your_mongodb_atlas_connection_string`
- `PORT` = `10000`

### 2.2 Deploy Backend
1. Click **"Create Web Service"**
2. Wait for deployment to complete
3. Note the backend URL (e.g., `https://hearing-clinic-backend.onrender.com`)

## 🎨 Step 3: Deploy Frontend Service

### 3.1 Create Frontend Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Static Site"
3. Connect your GitHub repository
4. Configure the service:

**Service Settings:**
- **Name**: `hearing-clinic-frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Plan**: Free

**Environment Variables:**
- `VITE_API_URL` = `https://hearing-clinic-backend.onrender.com`

### 3.2 Deploy Frontend
1. Click **"Create Static Site"**
2. Wait for deployment to complete
3. Note the frontend URL (e.g., `https://hearing-clinic-frontend.onrender.com`)

## 🔗 Step 4: Update CORS Settings

Update your backend `server.js` to allow your frontend domain:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://127.0.0.1:5173',
    'https://hearing-clinic-frontend.onrender.com' // Add your frontend URL
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 🎯 Step 5: Alternative - Single Service Deployment

If you prefer to deploy as a single service, you can use the `render.yaml` file:

1. Push the `render.yaml` file to your repository
2. Connect your repository to Render
3. Render will automatically detect and deploy both services

## 📱 Step 6: Custom Domain (Optional)

### 6.1 Add Custom Domain
1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain (e.g., `hearingclinic.com`)
4. Update DNS records as instructed

### 6.2 SSL Certificate
Render automatically provides SSL certificates for custom domains.

## 🔍 Step 7: Monitoring & Logs

### 7.1 View Logs
- Go to your service dashboard
- Click **"Logs"** tab
- Monitor for any errors

### 7.2 Health Checks
- Backend: `https://your-backend-url.onrender.com/`
- Frontend: `https://your-frontend-url.onrender.com/`

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check build logs in Render dashboard
   - Ensure all dependencies are in `package.json`

2. **CORS Errors**
   - Update CORS settings in `server.js`
   - Add frontend URL to allowed origins

3. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check network access settings in MongoDB Atlas

4. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly

## 📊 Performance Tips

1. **Enable Caching**
   - Static assets are cached automatically
   - API responses can be cached with appropriate headers

2. **Database Optimization**
   - Use MongoDB indexes for better performance
   - Consider connection pooling

3. **Frontend Optimization**
   - Enable gzip compression
   - Optimize images and assets

## 🔄 Updates & Maintenance

### Deploying Updates:
1. Push changes to your GitHub repository
2. Render automatically redeploys both services
3. Monitor deployment logs for any issues

### Rollback:
1. Go to service dashboard
2. Click **"Manual Deploy"**
3. Select previous successful deployment

## 📞 Support

- **Render Documentation**: https://render.com/docs
- **MongoDB Atlas**: https://docs.atlas.mongodb.com
- **React Deployment**: https://create-react-app.dev/docs/deployment

---

## 🎉 Success!

Your Hearing Clinic website should now be live at:
- **Frontend**: `https://hearing-clinic-frontend.onrender.com`
- **Backend**: `https://hearing-clinic-backend.onrender.com`

Both services will automatically redeploy when you push changes to your GitHub repository!
