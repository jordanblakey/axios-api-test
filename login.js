const axios = require('axios');

let login = () => {
  axios({
    method: 'post',
    url: 'https://overtureapp.com/api/authenticate',
    data: {
      email: email, // Use form input w/ validation
      password: password // Use form input w/ validation
    },
    headers: {
      'content-type': 'application/json'
    }
  })
  .then((response) => {
    let t = JSON.stringify(response.data.data.token).replace(/(^")|("$)/gi, "");
    localStorage.setItem('token', t);
  })
  .catch((error) => {
    return error;
  });
}

let request = (endpoint, id) => {
  axios({
    method: 'get',
    url: 'https://overtureapp.com/api/' + endpoint + '/' + id, // Get ID from UI
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return error;
  });
}
