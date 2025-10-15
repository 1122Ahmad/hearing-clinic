import { useState } from 'react';
import API from '../api';

const APITest = () => {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const testAPI = async () => {
    setIsLoading(true);
    setTestResult(null);
    
    try {
      console.log('Testing API connection...');
      console.log('API Base URL:', API.baseURL);
      
      const health = await API.healthCheck();
      console.log('Health check result:', health);
      
      setTestResult({
        success: true,
        message: 'API connection successful!',
        data: health
      });
    } catch (error) {
      console.error('API test failed:', error);
      setTestResult({
        success: false,
        message: `API test failed: ${error.message}`,
        error: error
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">API Connection Test</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Base URL: {API.baseURL}</p>
        </div>
        
        <button
          onClick={testAPI}
          disabled={isLoading}
          className="btn-primary"
        >
          {isLoading ? 'Testing...' : 'Test API Connection'}
        </button>
        
        {testResult && (
          <div className={`p-4 rounded-lg ${
            testResult.success 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <h4 className="font-semibold mb-2">
              {testResult.success ? '✅ Success' : '❌ Failed'}
            </h4>
            <p className="text-sm">{testResult.message}</p>
            {testResult.data && (
              <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto">
                {JSON.stringify(testResult.data, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default APITest;
