const axios = require('axios');
axios({
  method: 'post',
  url: 'https://overtureapp.com/api/authenticate',
  data: {
    email: "test@gmail.com",
    password: "password"
  },
  headers: {
    'content-type': 'application/json'
  }
})
.then(function(response) {
  localStorage.setItem('login-jwt', JSON.stringify(response.data.data.token));
})
.catch(function(error){
  console.log(error);
});
