
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
};

function getData(){
  console.log('testing');
  fetch("https://api.github.com/users/zeeshanhanif/followers")
  .then(function (response){
    console.log(response);
return response.json()

  })
  .then(function (user){
    console.log(user);  var table = document.getElementById("FollowerTable");
    for (var i = 0; i < user.length; i++) {
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = user[i].login;
  cell2.innerHTML = user[i].id;
  cell3.innerHTML = user[i].followers_url;
    }
  })
.catch(function(error){
console.log("not working");
})




}
  
