document.getElementById('post').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);
  
  fetch('https://reqres.in/api/blogs', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to submit blog');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    alert(JSON.stringify(data));
    document.getElementById('post').reset();
  })
  .catch(error => {
    console.log("error occured!!",error.message);
    alert("error occured!!",error.message);
  });
});
