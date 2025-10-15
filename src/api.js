// API Configuration for Frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create API instance with base configuration
const API = {
  baseURL: API_BASE_URL,
  
  // Helper method to make requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  // Contact API methods
  async submitContact(contactData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  async getContacts() {
    return this.request('/contacts');
  },

  // Appointment API methods
  async bookAppointment(appointmentData) {
    return this.request('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  },

  async getAppointments() {
    return this.request('/appointments');
  },

  async getAppointmentsByDate(date) {
    return this.request(`/appointments/date/${date}`);
  },

  // Health check
  async healthCheck() {
    return this.request('/health');
  },
};

export default API;
