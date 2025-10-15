// API Configuration for Frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
    return this.request('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  },

  async getContacts() {
    return this.request('/api/contacts');
  },

  // Appointment API methods
  async bookAppointment(appointmentData) {
    return this.request('/api/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  },

  async getAppointments() {
    return this.request('/api/appointments');
  },

  async getAppointmentsByDate(date) {
    return this.request(`/api/appointments/date/${date}`);
  },

  // Get unavailable slots (admin/doctor bookings)
  async getUnavailableSlots(date) {
    return this.request(`/api/unavailable-slots/date/${date}`);
  },

  // Health check
  async healthCheck() {
    return this.request('/api/health');
  },
};

export default API;
