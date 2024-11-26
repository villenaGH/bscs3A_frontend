// console.log(fetch(`https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/51fe71a3-cb12-4ac2-882f-45955401dd53/Golden+Retrievers+dans+pet+care.jpeg?format=1000w`)

// .then(response => {
//     console.log(response)
//     return response.blob();
// })

// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)

// })

// .catch(error =>{
//     console.log(error)
// })

// )


//--------------------------------------------------------------------



const content = document.querySelector("#content");
const submit = document.querySelector("#submit"); //POST

submit.addEventListener("click", () => {
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let gender = document.querySelector("#gender").value;


  let formData = { fname, lname, email, gender };
  fetch("http://localhost:5000/api/members", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => console.log(error)); //====== add this ======
  alert("Successfully inserted!");
  location.reload(); //======================
});


window.addEventListener("load", () => {
  getUsers();
});



function getUsers() {
  let html = ""; //https://bscs3a-api-crud-hdlw.onrender.com
  fetch("http://localhost:5000/api/members", { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data); //display DOM
      data.forEach((element) => {
        html += `<li>${element.first_name} ${element.last_name}</li>`;
      });
      content.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}
