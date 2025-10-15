// Test API connection
import API from './api';

const testConnection = async () => {
  try {
    console.log('Testing API connection...');
    console.log('API Base URL:', API.baseURL);
    
    const health = await API.healthCheck();
    console.log('Health check result:', health);
    
    return true;
  } catch (error) {
    console.error('API connection failed:', error);
    return false;
  }
};

export default testConnection;
