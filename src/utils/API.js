import axios from 'axios';

export default {
  // Gets all dreams
  getDreams: function() {
    return axios.get('/api/dreams');
  },
  // Gets one dream with the given id
  getDream: function(id) {
    return axios.get('/api/dreams/' + id);
  },
  // Deletes one dream with the given id
  deleteDream: function(id) {
    return axios.delete('/api/dreams/' + id);
  },
  // Saves a dream to the database
  saveBook: function(dreamData) {
    return axios.post('/api/dreams', dreamData);
  }
};
