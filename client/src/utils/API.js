import axios from 'axios';

export default {
  // Gets all debts
  getDebts: function() {
    return axios.get('/api/debts');
  },
  // Gets one specific debt with the given id
  getDebt: function(id) {
    return axios.get('/api/debts/' + id);
  },
  // Deletes one debt with the given id
  deleteDebt: function(id) {
    return axios.delete('/api/debts/' + id);
  },
  // Saves a debt to the database
  saveDebt: function(debtData) {
    return axios.post('/api/debts', debtData);
  }
};
