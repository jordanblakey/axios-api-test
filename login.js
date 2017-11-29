const axios = require('axios');

let login = () => {
  axios({
    method: 'post',
    url: 'https://overtureapp.com/api/authenticate',
    data: {
      email: 'test@gmail.com', // Use form input w/ validation
      password: 'password' // Use form input w/ validation
    },
    headers: {
      'content-type': 'application/json'
    }
  })
  .then((response) => {
    let t = JSON.stringify(response.data.data.token).replace(/(^")|("$)/gi, "");
    localStorage.setItem('token', t);
    return true;
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

request('games', '');
request('game', '5a1cdfb863746ab649278162');
request('users', '');
request('user', '593a2c245ee35676febbbf9e');
