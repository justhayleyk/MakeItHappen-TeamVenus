import axios from 'axios';

export default {
  // Gets all debt
  getDebts: function() {
    return axios.get('/api/debt');
  }
};
