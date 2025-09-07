const titulo = document.getElementById("titulo");
const checkbox = document.getElementById("completada");
const button = document.getElementById("submit");



async function postTarea() {
    if (checkbox.value == "on"){
        checkbox.value = true
    } else { 
        checkbox.value = false
    }

    const res = await
    fetch("http://127.0.0.1:5500/tareas",
        {
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({titulo:titulo.value, completada:checkbox.value})
        }
    )
    const data = await res.json();
    console.log(data)
}

button.addEventListener("click", postTarea)