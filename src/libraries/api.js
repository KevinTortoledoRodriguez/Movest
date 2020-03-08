const axios = require('axios');

const baseUrl = 'http://localhost:3005/api/';

module.exports = {
  getMethod(params = {}){
    axios.get(`${baseUrl}${params.url}`)
    .then(function (response) {
      params.success(response.data);
    })
    .catch(function (error) {
      params.fail(error);
    })
  },

  postMethod(params = {}){
    axios.post(`${baseUrl}${params.url}`, {
      params: params.body
    })
    .then(function (response) {
      params.success(response.data);
    })
    .catch(function (error) {
      params.fail(error);
    });
  },

  putMethod(params = {}){
    axios.put(`${baseUrl}${params.url}`, {
      params: params.body
    })
    .then(function (response) {
      params.success(response.data);
    })
    .catch(function (error) {
      params.fail(error);
    });
  },

  deleteMethod(params = {}){

    axios.delete(`${baseUrl}${params.url}/${params.body}`)
    .then(function (response) {
      params.success(response.data);
    })
    .catch(function (error) {
      params.fail(error);
    });

  }
}
