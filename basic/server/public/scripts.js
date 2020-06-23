// ** start count code block **
// axios assists with making http requests to the server
// specify axios http method followed by server route
// 'then' will run if the request is successful
// 'catch' will run if there's an error
// response.data is the data being sent back from the server
function getCount() {
  axios.get(`http://localhost:5000/count`)
    .then((response) => {
      document.getElementById("count").innerHTML = response.data;
    })
    .catch((error) => {
      console.log("error in /count GET", error);
    });
}

// the GET function fetches the updated data
// console.log will show the http code response
function incrementCount() {
  axios.put(`http://localhost:5000/count`)
    .then((response) => {
      console.log('response:', response);
      getCount();
    })
    .catch((error) => {
      console.log("error in /count PUT", error);
    });
}

// GET count on every page render
getCount();
// ** end count code block **

// ** start username code block **
function getUsername() {
  axios.get(`http://localhost:5000/username`)
    .then((response) => {
      document.getElementById("username").innerHTML = response.data;
    })
    .catch((error) => {
      console.log("error in /username GET", error);
    });
}

// POST requests require a 'body' to send as an object
// here we send an object with the key 'username'
// this data is sent with the POST request as a second parameter
// we call the GET function to fetch the posted data
// then we reset the input value
function postUsername() {
  let dataToSend = {
    username: document.getElementById("username-input").value,
  };
  axios.post(`http://localhost:5000/username`, dataToSend)
    .then((response) => {
      console.log('response:', response);
      getUsername();
      resetInputValue();
    })
    .catch((error) => {
      console.log("error in /username POST", error);
    });
}

function resetInputValue() {
  document.getElementById("username-input").value = "";
}
// ** end username code block **
