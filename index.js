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



//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers();
})

function getUsers(){
    let html=""

    fetch("https://bscs3a-api-crud-hdlw.onrender.com" , {mode: "cors"}) //online
    //fetch("http://localhost:5000/api/members" , {mode: "cors"})  //offline
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })     

}