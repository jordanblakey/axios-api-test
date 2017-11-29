const axios = require('axios');

// Get, using promises
// axios.get('https://google.com')
// .then(function (response) {
//   console.log(response)
// })
// .catch(function(error) {
//   console.log(error);
// });

// Optionally the request above could be done as
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
  console.log(response.data.data.token);
  // console.log(response.status);
  // console.log(response.statusText);
  // console.log(response.headers);
  // console.log(response.config);
  localStorage.setItem('login-jwt', JSON.stringify(response.data.data.token));
})
.catch(function(error){
  console.log(error);
});
